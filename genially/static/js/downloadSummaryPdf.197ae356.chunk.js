"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[734],{14900:(e,t,n)=>{n.r(t),n.d(t,{downloadPdf:()=>r});var a=n(13208),l=n.n(a),c=n(47645),i=n.n(c),s=n(15711),o=n(57627);const r=(e,t)=>{const n=e.style.display;Object.assign(e.style,{display:"flex"}),l()(e,{scale:1,useCORS:!0,allowTaint:!0,scrollY:-window.scrollY}).then((a=>{const l=a.toDataURL("image/png",1),c=new(i())("p","px","a4"),s=c.internal.pageSize.getWidth(),o=c.internal.pageSize.getHeight(),r=s/a.width,g=o/a.height,d=r>g?g:r,p=a.width*d,w=a.height*d,h=(s-p)/2;c.addImage(l,"PNG",h,0,p,w),c.save("".concat((e=>{const t=new Date,n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getFullYear()),c="".concat(n,"-").concat(a,"-").concat(l);return"".concat(null===e||void 0===e?void 0:e.replace(/\s+/g,"_"),"_").concat(c)})(t),".pdf")),Object.assign(e.style,{display:n})})).catch((()=>{s.fn.error((0,o.Z)("__new.content.answerResults.errorDownload"))}))}}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/downloadSummaryPdf.197ae356.chunk.js.map