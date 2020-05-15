/*
 * Created by Basel Mohammed Al_hajeri.MBH?.();
 * Copyright (C) 2020 MBH .All right reserved.
 */
;this.self = this.globalThis || this.self || this.window || this;
(function(global, factory) {
    typeof exports==='object' && typeof module!=='undefined' ? factory(exports) : typeof define==='function' && define.amd ? define(['exports', factory]) : factory(global.Random = {});
}(self, function(Export) {
    'use strict';
    var res = new Def(Date.now() / 1e+13);
    var all = ['rand', 'randInt'];
    res.met();
    Export.rand = function() {
        var finalResult = res.pro;
        res = new Def(finalResult + Date.now() / 1e+13);
        return finalResult;
    };
    Export.randInt = function(min, max) {
        if(max !== undefined)
            return ~~(this.rand() * (max - min) + min);
        return~~(this.rand() * min);
    };
    if(typeof Symbol !== 'undefined')
        Export[Symbol.toStringTag] = 'Random';
    else Export.toString = function() {
        return '[object Random]'; // just with toString in old commonJS;
    }.bind(self);
    all.map(function(pro) {
        Export[pro].toString = function() {
            return'function '+pro+'() { [MBH code] }';
        }.bind(self);
    });
    function Def(x) {
        var delta = function() {
            var time = Date.now().toString();
            var hz = '';
            var θ;
            for (θ = time.length - 1; θ >= 0; θ--) {
                hz += time[ θ ];
            }
            return Number('0.' + hz); //+time.split('').reverse().join('')); hmm thought no prob lol .. don't want to use any short ways
        };
        var _this = this;
        _this.pro = (delta() + (x || 1 / 7) * 3.141592653589793) % 1;
        _this.met = function met() {
            _this.pro += delta();
            _this.pro %= 1;
            self.requestIdleCallback(met);
        };
    }
}));



