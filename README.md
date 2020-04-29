# ol-opacity 

ol-opacity is a OpenLayers plugin that makes multiple tile layers transparent.  
[OpenLayers Plugins](https://openlayers.org/3rd-party)  
[npm](https://www.npmjs.com/package/ol-opacity)  

<br>

Browser Support
- Chrome
- Firefox
- Safari

<br>

## Usage  

![ol-opacity](./img/ol-opacity.gif)

<br>

### Demo  

[demo](https://dayjournal.github.io/ol-opacity)

<br>

### Option  

```javascript
// OpacityControl Option

// Baselayers settings
baseLayers: new LayerGroup({
    title: 'BaseLayer',
    id: 'baseLayer',
    layers: [
        m_streets,
        m_gray
    ]
})

// Overlayers settings
overLayers: new LayerGroup({
    title: 'OverLayer',
    id: 'overLayer',
    layers: [
        o_std,
        t_pale,
        t_ort
    ]
})

// Transparent slide bar settings (true or false)
opacityControl: true
```

<br>

### Example - npm

Start OpenLayers easily. [OpenLayers, webpack]  
[openlayers-starter](https://github.com/dayjournal/openlayers-starter) 

Install package
```bash
npm install ol-opacity
```

main.js
```javascript
// CSS import
import "ol/ol.css";
import "ol-opacity/dist/ol-opacity.css";
import "./css/style.css";

// JS import
import './js/script.js';
```

script.js
```javascript
// ol module import
import Map from 'ol/Map';
import View from 'ol/View';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

// plugin module import
import OpacityControl from "ol-opacity";

// MIERUNE Streets
const m_streets = new TileLayer({
    title: 'MIERUNE Streets',
    id: 'm_streets',
    source: new XYZ({
        url: 'https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=giAeaRZBFWKqrzIDD5Se',
        attributions: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18,
        visible: true
    })
});

// MIERUNE Gray
const m_gray = new TileLayer({
    title: 'MIERUNE Gray',
    id: 'm_gray',
    source: new XYZ({
        url: 'https://api.maptiler.com/maps/jp-mierune-gray/256/{z}/{x}/{y}.png?key=giAeaRZBFWKqrzIDD5Se',
        attributions: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// OpenStreetMap
const o_std = new TileLayer({
    title: 'OpenStreetMap',
    id: 'o_std',
    source: new XYZ({
        url: 'http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
        attributions: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// GSI Pale
const t_pale = new TileLayer({
    title: 'GSI Pale',
    id: 't_pale',
    source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        attributions: '<a href=\'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html\' target=\'_blank\'>国土地理院</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// GSI Ort
const t_ort = new TileLayer({
    title: 'GSI Ort',
    id: 't_ort',
    source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg',
        attributions: '<a href=\'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html\' target=\'_blank\'>国土地理院</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// BaseLayer
const mapBaseLayer = new LayerGroup({
    title: 'BaseLayer',
    id: 'baseLayer',
    layers: [
        m_streets,
        m_gray
    ]
});

// OverLayer
const mapOverLayer = new LayerGroup({
    title: 'OverLayer',
    id: 'overLayer',
    layers: [
        o_std,
        t_pale,
        t_ort
    ]
});


// MapCreate
const map = new Map ({
    target: 'map',
    layers: [
        mapBaseLayer,
        mapOverLayer
    ],
    view: new View ({
        center: fromLonLat([139.767, 35.681]),
        zoom: 11
    })
});

// OpacityControl
const opacityControl = new OpacityControl({
    baseLayers: mapBaseLayer,
    overLayers: mapOverLayer,
    opacityControl: true
});
map.addControl(opacityControl);
m_streets.setVisible(true);
```

<br>

## License
MIT

Copyright (c) 2020 Yasunori Kirimoto

<br>

---

<br>

### Japanese

<br>

# ol-opacity 

ol-opacityは、複数のタイルレイヤーを透過するOpenLayersのプラグインです。   
[OpenLayers Plugins](https://openlayers.org/3rd-party)  
[npm](https://www.npmjs.com/package/ol-opacity)  

<br>

対応ブラウザ
- Chrome
- Firefox
- Safari

<br>

## 使用方法  

![ol-opacity](./img/ol-opacity.gif)

<br>

### デモ  

[デモ](https://dayjournal.github.io/ol-opacity)

<br>

### オプション  

```javascript
// OpacityControlのオプション

// 背景レイヤ設定
baseLayers: new LayerGroup({
    title: 'BaseLayer',
    id: 'baseLayer',
    layers: [
        m_streets,
        m_gray
    ]
})

// オーバーレイヤ設定
overLayers: new LayerGroup({
    title: 'OverLayer',
    id: 'overLayer',
    layers: [
        o_std,
        t_pale,
        t_ort
    ]
})

// 透過度スライドバー表示/非表示設定 (trueまたはfalse)
opacityControl: true
```

<br>

### 例 - npm

OpenLayersを手軽に始める [OpenLayers, webpack]  
[openlayers-starter](https://github.com/dayjournal/openlayers-starter) 

パッケージインストール
```bash
npm install ol-opacity
```

main.js
```javascript
// CSS import
import "ol/ol.css";
import "ol-opacity/dist/ol-opacity.css";
import "./css/style.css";

// JS import
import './js/script.js';
```

script.js
```javascript
// ol module import
import Map from 'ol/Map';
import View from 'ol/View';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

// plugin module import
import OpacityControl from "ol-opacity";

// MIERUNE Streets
const m_streets = new TileLayer({
    title: 'MIERUNE Streets',
    id: 'm_streets',
    source: new XYZ({
        url: 'https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=giAeaRZBFWKqrzIDD5Se',
        attributions: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18,
        visible: true
    })
});

// MIERUNE Gray
const m_gray = new TileLayer({
    title: 'MIERUNE Gray',
    id: 'm_gray',
    source: new XYZ({
        url: 'https://api.maptiler.com/maps/jp-mierune-gray/256/{z}/{x}/{y}.png?key=giAeaRZBFWKqrzIDD5Se',
        attributions: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// OpenStreetMap
const o_std = new TileLayer({
    title: 'OpenStreetMap',
    id: 'o_std',
    source: new XYZ({
        url: 'http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
        attributions: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// GSI Pale
const t_pale = new TileLayer({
    title: 'GSI Pale',
    id: 't_pale',
    source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        attributions: '<a href=\'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html\' target=\'_blank\'>国土地理院</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// GSI Ort
const t_ort = new TileLayer({
    title: 'GSI Ort',
    id: 't_ort',
    source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg',
        attributions: '<a href=\'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html\' target=\'_blank\'>国土地理院</a>',
        attributionsCollapsible: false,
        tileSize: [256, 256],
        minZoom: 0,
        maxZoom: 18
    })
});

// BaseLayer
const mapBaseLayer = new LayerGroup({
    title: 'BaseLayer',
    id: 'baseLayer',
    layers: [
        m_streets,
        m_gray
    ]
});

// OverLayer
const mapOverLayer = new LayerGroup({
    title: 'OverLayer',
    id: 'overLayer',
    layers: [
        o_std,
        t_pale,
        t_ort
    ]
});


// MapCreate
const map = new Map ({
    target: 'map',
    layers: [
        mapBaseLayer,
        mapOverLayer
    ],
    view: new View ({
        center: fromLonLat([139.767, 35.681]),
        zoom: 11
    })
});

// OpacityControl
const opacityControl = new OpacityControl({
    baseLayers: mapBaseLayer,
    overLayers: mapOverLayer,
    opacityControl: true
});
map.addControl(opacityControl);
m_streets.setVisible(true);
```

<br>

## ライセンス
MIT

Copyright (c) 2020 Yasunori Kirimoto

<br>