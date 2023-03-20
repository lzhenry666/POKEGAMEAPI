var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var answer = document.getElementById('answer');
var answer_input = document.getElementById('answer_input');
var reload = document.getElementById('reload');
var img = document.querySelector('img');
var erros = 0;
var acertos = 0;
img.setAttribute('width', '200px');
img.setAttribute('height', '200px');
var numero = Math.floor(Math.random() * 807) + 1;
var pokemonsSorteados = [];
pokemonsSorteados.push(numero);
function aleatorio(numero) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch("https://pokeapi.co/api/v2/pokemon/".concat(numero))];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    data = _a.sent();
                    img.setAttribute('src', data.sprites.front_default);
                    return [2];
            }
        });
    });
}
resetar();
function resetar() {
    document.querySelector('span').innerHTML = '';
    document.getElementById('imgpokemon').className = '';
    numero = Math.floor(Math.random() * 807) + 1;
    aleatorio(numero);
}
function Answering() {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, response, data, erross;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resposta = document.querySelector('input').value.trim();
                    if (!resposta.length) return [3, 3];
                    return [4, fetch("https://pokeapi.co/api/v2/pokemon/".concat(numero))];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    data = _a.sent();
                    if (resposta.toLowerCase() === data.name.toLowerCase()) {
                        acertos++;
                        acertos == 1 ? document.querySelector('.acertos').innerHTML = "Parab\u00E9ns! Voc\u00EA acertou ".concat(acertos, " vez") : document.querySelector('.acertos').innerHTML = "Parab\u00E9ns! Voc\u00EA acertou ".concat(acertos, " vezes");
                        document.querySelector('span').innerHTML = "Parab\u00E9ns! \u00C9 o ".concat(data.name);
                        document.getElementById('imgpokemon').className = 'acertou';
                        document.querySelector('input').value = '';
                        setTimeout(resetar, 2000);
                    }
                    else {
                        erros++;
                        erross = document.querySelector('.erros').innerHTML = "Voc\u00EA errou ".concat(erros, " vezes");
                        document.querySelector('span').innerHTML = "Voc\u00EA errou! \u00C9 o ".concat(data.name);
                        document.getElementById('imgpokemon').className = 'errou';
                        document.querySelector('input').value = '';
                        setTimeout(resetar, 2000);
                    }
                    return [3, 4];
                case 3:
                    document.querySelector('span').innerHTML = 'Coloque o nome';
                    _a.label = 4;
                case 4: return [2];
            }
        });
    });
}
answer.addEventListener('click', Answering);
answer_input.addEventListener('keydown', function (event) {
    if (event.which === 13) {
        console.log('enter');
        Answering();
    }
});
reload.addEventListener('click', resetar);
function changeBackground() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, container, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch('./assets/bg/data.json')];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2:
                    data = _a.sent();
                    container = document.querySelector('#container');
                    i = 0;
                    setInterval(function () {
                        container.style.backgroundImage = "url(".concat(data[i].img, ")");
                        container.style.backgroundSize = 'cover';
                        container.style.backgroundRepeat = 'no-repeat';
                        i = (i + 1) % data.length;
                    }, 5000);
                    return [2];
            }
        });
    });
}
changeBackground();
var videoFloat = document.getElementById("video-float");
var moveBtn = document.getElementById("move-btn");
var closeBtn = document.getElementById("close-btn");
moveBtn.addEventListener("mousedown", dragStart);
closeBtn.addEventListener("click", closeVideoFloat);
var startX = 0;
var startY = 0;
var offsetX = 0;
var offsetY = 0;
function dragStart(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
}
function dragMove(e) {
    e.preventDefault();
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    offsetX += dx;
    offsetY += dy;
    videoFloat.style.left = (videoFloat.offsetLeft + dx) + "px";
    videoFloat.style.top = (videoFloat.offsetTop + dy) + "px";
    startX = e.clientX;
    startY = e.clientY;
}
function dragEnd(e) {
    e.preventDefault();
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("mouseup ", dragEnd);
}
function closeVideoFloat(e) {
    e.preventDefault();
    videoFloat.style.display = "none";
}
//# sourceMappingURL=script.js.map