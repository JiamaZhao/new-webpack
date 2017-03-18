import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    var dom = document.getElementById('app');
    var layer =new Layer();
    dom.innerHTML = layer.tpl({
        name:'winter',
        arr: [1,3,3,5,6,8]
    });
}

new App();

