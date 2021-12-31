var $3Ceh7$gsap = require("gsap");

// Preload fonts
const $b07212c24676ac6d$export$f2704129bd95623f = (id)=>{
    return new Promise((resolve)=>{
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};
const $b07212c24676ac6d$export$19fa182fb736e81a = (min, max)=>Math.floor(Math.random() * (max - min + 1) + min)
;




const $ed485beac031cbcc$var$DOM = {
    frame: document.querySelector('.frame'),
    content: document.querySelector('.content'),
    enterCtrl: document.querySelector('.enter'),
    enterBackground: document.querySelector('.enter__bg')
};
class $ed485beac031cbcc$export$b3c44ac484b3c461 {
    constructor(el){
        // the SVG element
        this.DOM = {
            el: el
        };
        // SVG texts
        this.DOM.circleText = [
            ...this.DOM.el.querySelectorAll('text.circles__text')
        ];
        // total
        this.circleTextTotal = this.DOM.circleText.length;
        this.setup();
    }
    setup() {
        // need to set the transform origin
        // need to set the transform origin in the center
        $3Ceh7$gsap.gsap.set(this.DOM.circleText, {
            transformOrigin: '50% 50%'
        });
        // hide on start
        $3Ceh7$gsap.gsap.set([
            this.DOM.circleText,
            $ed485beac031cbcc$var$DOM.content.children,
            $ed485beac031cbcc$var$DOM.frame.children
        ], {
            opacity: 0
        });
        // don't allow to hover
        $3Ceh7$gsap.gsap.set($ed485beac031cbcc$var$DOM.enterCtrl, {
            pointerEvents: 'none'
        });
        this.initEvents();
    }
    initEvents() {
        this.enterMouseEnterEv = ()=>{
            $3Ceh7$gsap.gsap.killTweensOf([
                $ed485beac031cbcc$var$DOM.enterBackground,
                this.DOM.circleText
            ]);
            $3Ceh7$gsap.gsap.to($ed485beac031cbcc$var$DOM.enterBackground, {
                duration: 1,
                ease: 'expo',
                scale: 1.4
            });
            $3Ceh7$gsap.gsap.to(this.DOM.circleText, {
                duration: 1,
                ease: 'expo',
                scale: 1.15,
                rotation: (i)=>i % 2 ? '-=90' : '+=90'
                ,
                opacity: 0.4
            });
        };
        this.enterMouseLeaveEv = ()=>{
            // gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]);
            $3Ceh7$gsap.gsap.to($ed485beac031cbcc$var$DOM.enterBackground, {
                duration: 1,
                ease: 'expo',
                scale: 1
            });
            $3Ceh7$gsap.gsap.to(this.DOM.circleText, {
                duration: 1,
                ease: 'expo',
                scale: 1,
                rotation: (i)=>i % 2 ? '+=120' : '-=120'
                ,
                opacity: 1,
                stagger: {
                    amount: -0.2
                }
            });
        };
        $ed485beac031cbcc$var$DOM.enterCtrl.addEventListener('mouseenter', this.enterMouseEnterEv);
        $ed485beac031cbcc$var$DOM.enterCtrl.addEventListener('mouseleave', this.enterMouseLeaveEv);
        this.enterClickEv = ()=>this.enter()
        ;
        $ed485beac031cbcc$var$DOM.enterCtrl.addEventListener('click', this.enterClickEv);
    }
    start() {
        this.startTL = $3Ceh7$gsap.gsap.timeline().addLabel('start', 0)// rotation for all texts
        .to(this.DOM.circleText, {
            duration: 3,
            ease: 'expo.inOut',
            rotation: (i)=>i % 2 ? 90 : -90
            ,
            stagger: {
                amount: 0.4
            }
        }, 'start')// scale in the texts & enter button and fade them in
        .to([
            this.DOM.circleText,
            $ed485beac031cbcc$var$DOM.enterCtrl
        ], {
            duration: 3,
            ease: 'expo.inOut',
            startAt: {
                opacity: 0,
                scale: 0.8
            },
            scale: 1,
            opacity: 1,
            stagger: {
                amount: 0.4
            }
        }, 'start')// at start+1 allow the hover over the enter ctrl
        .add(()=>{
            $3Ceh7$gsap.gsap.set($ed485beac031cbcc$var$DOM.enterCtrl, {
                pointerEvents: 'auto'
            });
        }, 'start+=2');
    }
    enter() {
        this.startTL.kill();
        $3Ceh7$gsap.gsap.set($ed485beac031cbcc$var$DOM.enterCtrl, {
            pointerEvents: 'none'
        });
        $ed485beac031cbcc$var$DOM.enterCtrl.removeEventListener('mouseenter', this.enterMouseEnterEv);
        $ed485beac031cbcc$var$DOM.enterCtrl.removeEventListener('mouseleave', this.enterMouseLeaveEv);
        $3Ceh7$gsap.gsap.set([
            $ed485beac031cbcc$var$DOM.frame,
            $ed485beac031cbcc$var$DOM.content
        ], {
            opacity: 1
        });
        $3Ceh7$gsap.gsap.timeline().addLabel('start', 0).to($ed485beac031cbcc$var$DOM.enterCtrl, {
            duration: 0.6,
            ease: 'back.in',
            scale: 0.2,
            opacity: 0
        }, 'start').to(this.DOM.circleText, {
            duration: 0.8,
            ease: 'back.in',
            scale: 0,
            opacity: 0,
            stagger: {
                amount: -0.4
            }
        }, 'start').to([
            $ed485beac031cbcc$var$DOM.content.children,
            $ed485beac031cbcc$var$DOM.frame.children
        ], {
            duration: 0.9,
            ease: 'back.out',
            startAt: {
                opacity: 0,
                scale: 1.2
            },
            scale: 1,
            opacity: 1,
            stagger: {
                amount: 0.3
            }
        }, 'start+=1.3');
    }
}


const $fe154b27d0fab001$var$intro = new $ed485beac031cbcc$export$b3c44ac484b3c461(document.querySelector('.circles'));
// Preload images and fonts
Promise.all([
    $b07212c24676ac6d$export$f2704129bd95623f('kxo3pgz')
]).then(()=>{
    // remove loader (loading class)
    document.body.classList.remove('loading');
    // start intro
    $fe154b27d0fab001$var$intro.start();
});


//# sourceMappingURL=index.js.map
