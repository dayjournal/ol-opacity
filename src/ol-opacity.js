
// olモジュールインポート
import Control from 'ol/control/Control';

// デフォルトオプション設定
const defaultOptions = {
    baseLayers: null,
    overLayers: null,
    opacityControl: false
};

class OpacityControl extends Control {
    constructor(opt_options) {
        const options = opt_options ? opt_options : {};
        super(options);
        const element = document.createElement('div');
        this.element = element;
        // オプション設定
        this.baseLayersOption_ = options.baseLayers || defaultOptions.baseLayers;
        this.overLayersOption_ = options.overLayers || defaultOptions.overLayers;
        this.opacityControlOption_ = options.opacityControl || defaultOptions.opacityControl;
    }

    // マップ設定
    setMap(map) {
        super.setMap(map);
        if (map) {
            map.render();
            this.map_ = map;
            // コントロール作成
            this.opacityControlAdd_();
        }
    }

    // ラジオボタン作成
    radioButtonControlAdd_(layerId, layerTitle) {
        // ラジオボタン追加
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.id = layerId;
        // 初期レイヤのみ表示
        this.map_.getLayers().forEach((layerGroup) => {
            if (layerGroup.values_.id === 'baseLayer'){
                layerGroup.getLayers().forEach((layer) => {
                    // 表示リセット
                    layer.setVisible(false);
                    // 初期レイヤのみ表示
                    if (layerId === layerGroup.getLayers().array_[0].values_.id) {
                        radioButton.checked = true;
                        layer.setVisible(true);
                    }
                });
            }
        });
        this.element.appendChild(radioButton);

        // ラジオボタンイベント
        radioButton.addEventListener('change', (event) => {
            // 選択レイヤ表示
            event.target.checked = true;
            this.map_.getLayers().forEach((layerGroup) => {
                if (layerGroup.values_.id === 'baseLayer'){
                    layerGroup.getLayers().forEach((layer) => {
                        // 表示リセット
                        document.getElementById(layer.values_.id).checked = false;
                        layer.setVisible(false);
                        // 切り替え表示
                        if (event.target.id === layer.values_.id) {
                            radioButton.checked = true;
                            layer.setVisible(true);
                        }
                    });
                }
            });
        });

        // レイヤ名追加
        const layerName = document.createElement('span');
        layerName.appendChild(document.createTextNode(layerTitle));
        this.element.appendChild(layerName);
    }

    // チェックボックス作成
    checkBoxControlAdd_(layerId, layerTitle) {
        // チェックボックス追加
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.id = layerId;
        // 全レイヤ非表示
        this.map_.getLayers().forEach((layerGroup) => {
            if (layerGroup.values_.id === 'overLayer'){
                layerGroup.getLayers().forEach((layer) => {
                    layer.setVisible(false);
                });
            }
        });
        this.element.appendChild(checkBox);

        // チェックボックスイベント
        checkBox.addEventListener('change', (event) => {
            const ckFlag = event.target.checked;
            // レイヤの表示・非表示
            this.map_.getLayers().forEach((layerGroup) => {
                if (layerGroup.values_.id === 'overLayer'){
                    layerGroup.getLayers().forEach((layer) => {
                        if (event.target.id === layer.values_.id) {
                            if (ckFlag) {
                                layer.setVisible(true);
                            } else {
                                layer.setVisible(false);
                            }
                        }
                    });
                }
            });
        });

        // レイヤ名追加
        const layerName = document.createElement('span');
        layerName.appendChild(document.createTextNode(layerTitle));
        this.element.appendChild(layerName);
    }

    // スライドバー作成
    rangeControlAdd_(layerId) {
        // スライドバー追加
        const range = document.createElement('input');
        range.type = 'range';
        range.min = 0;
        range.max = 100;
        range.value = 100;
        this.element.appendChild(range);
        range.id = layerId;

        // スライドバーイベント
        range.addEventListener('input', (event) => {
            const rgValue = event.target.value;
            // 透過度設定
            this.map_.getLayers().forEach((layerGroup) => {
                if (layerGroup.values_.id === 'overLayer'){
                    layerGroup.getLayers().forEach((layer) => {
                        if (event.target.id === layer.values_.id) {
                            layer.setOpacity(Number(rgValue / 100));
                        }
                    });
                }
            });
        });
    }

    // コントロール作成
    opacityControlAdd_() {
        // コントロール設定
        this.element.className = 'ol-opacity';
        this.element.id = 'opacity-control';

        // 背景レイヤ設定
        if (this.baseLayersOption_ !== null) {
            this.map_.getLayers().forEach((layerGroup) => {
                if (layerGroup.values_.id === 'baseLayer'){
                    layerGroup.getLayers().forEach((layer) => {
                        const layerId = layer.values_.id;
                        const layerTitle = layer.values_.title;
                        const br = document.createElement('br');
                        // ラジオボタン作成
                        this.radioButtonControlAdd_(layerId, layerTitle);
                        this.element.appendChild(br);
                    });
                }
            });
        }

        // 区切り線
        if (this.baseLayersOption_ !== null && this.overLayersOption_ !== null) {
            const hr = document.createElement('hr');
            this.element.appendChild(hr);
        }

        // オーバーレイヤ設定
        if (this.overLayersOption_ !== null) {
            this.map_.getLayers().forEach((layerGroup) => {
                if(layerGroup.values_.id === 'overLayer'){
                    layerGroup.getLayers().forEach((layer) => {
                        const layerId = layer.values_.id;
                        const layerTitle = layer.values_.title;
                        const br = document.createElement('br');
                        // チェックボックス作成
                        this.checkBoxControlAdd_(layerId, layerTitle);
                        this.element.appendChild(br);
                        // スライドバー作成
                        if (this.opacityControlOption_) {
                            this.rangeControlAdd_(layerId);
                            this.element.appendChild(br);
                        }
                    });
                }
            });
        }
    }
}

export default OpacityControl;
