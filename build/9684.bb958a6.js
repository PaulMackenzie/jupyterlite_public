"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9684,4354],{74354:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var n,c=t(21521),r=t(71574),l=t(40664),o=t(56615),d=t(88706),i=t(81734);!function(e){e.create="launcher:create"}(n||(n={}));const u={activate:function(e,a,t,c){const{commands:o,shell:u}=e,h=a.load("jupyterlab"),m=new l.LauncherModel;return o.addCommand(n.create,{label:h.__("New Launcher"),execute:e=>{const n=e.cwd?String(e.cwd):"",c="launcher-"+s.id++,_=new l.Launcher({model:m,cwd:n,callback:e=>{u.add(e,"main",{ref:c})},commands:o,translator:a});_.model=m,_.title.icon=d.launcherIcon,_.title.label=h.__("Launcher");const w=new r.MainAreaWidget({content:_});return w.title.closable=!!(0,i.toArray)(u.widgets("main")).length,w.id=c,u.add(w,"main",{activate:e.activate}),t&&t.layoutModified.connect((()=>{w.title.closable=(0,i.toArray)(t.widgets("main")).length>1}),w),w}}),c&&c.addItem({command:n.create,category:h.__("Launcher")}),m},id:"@jupyterlab/launcher-extension:plugin",requires:[o.ITranslator],optional:[c.ILabShell,r.ICommandPalette],provides:l.ILauncher,autoStart:!0};var s;!function(e){e.id=0}(s||(s={}))}}]);
//# sourceMappingURL=9684.bb958a6.js.map