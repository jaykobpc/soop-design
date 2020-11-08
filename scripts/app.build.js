var nav_bar = document.querySelector("#navbar");
var wx_mainview = document.querySelector("#wxmainview");
var allImages = document.querySelectorAll("img");

if (wx_mainview) {
  wx_mainview.addEventListener("scroll", function (e) {
    e.preventDefault();
    if (wx_mainview.scrollTop > 15) {
      if (nav_bar) {
        nav_bar.classList.add("nav_shadow");
      }
    } else if (wx_mainview.scrollTop < 15) {
      if (nav_bar) {
        nav_bar.classList.remove("nav_shadow");
      }
    }
  });
}

allImages.forEach(function (img) {
  img.setAttribute("draggable", false);
});


(function () {
  "use strict";

  function KtWidget(params) {
    this.selectorOpen = null;
    this.selectorWidget = null;
    var self = this;

    if (typeof params !== "object" || !params) {
      return false;
    }

    if (params.selectorOpen) {
      self.selectorOpen = params.selectorOpen;
    }

    if (params.selectorWidget) {
      self.selectorWidget = params.selectorWidget;
    }

    self.showWidget();
    self.closeWidget();
  }

  KtWidget.prototype.showWidget = function () {
    var self = this;
    var selectorAsBtn = document.querySelector(self.selectorOpen);
    var selectorAsWidget = document.querySelector(self.selectorWidget);

    if (selectorAsBtn) {
      selectorAsBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (selectorAsWidget) {
          selectorAsWidget.classList.add("show_listview");
        }
      });
    }
  };

  KtWidget.prototype.closeWidget = function () {
    var self = this;
    var selectorAsWidget = document.querySelector(self.selectorWidget);

    window.addEventListener("mouseup", function (event) {
      if (
        event.target != selectorAsWidget &&
        event.target.parentNode != selectorAsWidget
      ) {
        if(selectorAsWidget) {
          selectorAsWidget.classList.remove("show_listview");
        }
      }
    });
  };

  window.KtWidget = KtWidget;
})();

new KtWidget({ selectorOpen: "#card-listopen-1", selectorWidget: "#card-listview-1" });
new KtWidget({ selectorOpen: "#card-listopen-2", selectorWidget: "#card-listview-2" });
new KtWidget({ selectorOpen: "#card-listopen-3", selectorWidget: "#card-listview-3" });
new KtWidget({ selectorOpen: "#card-listopen-4", selectorWidget: "#card-listview-4" });
new KtWidget({ selectorOpen: "#card-listopen-5", selectorWidget: "#card-listview-5" });
new KtWidget({ selectorOpen: "#card-listopen-6", selectorWidget: "#card-listview-6" });
new KtWidget({ selectorOpen: "#card-listopen-7", selectorWidget: "#card-listview-7" });
new KtWidget({ selectorOpen: "#card-listopen-8", selectorWidget: "#card-listview-8" });
new KtWidget({ selectorOpen: "#card-listopen-9", selectorWidget: "#card-listview-9" });
new KtWidget({ selectorOpen: "#card-listopen-10", selectorWidget: "#card-listview-10" });
new KtWidget({ selectorOpen: "#card-listopen-11", selectorWidget: "#card-listview-11" });
new KtWidget({ selectorOpen: "#card-listopen-12", selectorWidget: "#card-listview-12" });
new KtWidget({ selectorOpen: "#card-listopen-13", selectorWidget: "#card-listview-13" });
new KtWidget({ selectorOpen: "#card-listopen-14", selectorWidget: "#card-listview-14" });
new KtWidget({ selectorOpen: "#card-listopen-15", selectorWidget: "#card-listview-15" });
new KtWidget({ selectorOpen: "#card-listopen-16", selectorWidget: "#card-listview-16" });
