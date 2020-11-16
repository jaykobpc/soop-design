var nav_bar = document.querySelector("#navbar");
var wx_mainview = document.querySelector("#wxmainview");
var allImages = document.querySelectorAll("img");
var mobileNavBtn = document.querySelector("#mobilenav");
var mobileNavContainer = document.querySelector("#mobile-side-nav");
var mobileNavItem = document.querySelectorAll(".mobilesidenav__itemtab");

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

document.addEventListener("DOMContentLoaded", function() {
  if(document.body.classList.contains("preload")) {
    document.body.classList.remove("preload");
  }
})


allImages.forEach(function (img) {
  img.setAttribute("draggable", false);
  img.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  })
});

if(mobileNavItem) {
  mobileNavItem.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation()
    })
  })
}

if(mobileNavBtn) {
  mobileNavBtn.addEventListener("click", function(e) {
    e.preventDefault();
    mobileNavContainer.classList.add("mobilenav_open");
  });
}

if(mobileNavContainer) {
  mobileNavContainer.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    mobileNavContainer.classList.remove("mobilenav_open");
  })
}


;(function () {
  "use strict";

  function KtWidget(params) {
    this.selectorOpen = null;
    this.selectorWidget = null;
    this.classSelector = null;
    this.useCloseBtn = false;
    this.selectorClose = null;
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

    if(params.classSelector) {
      self.classSelector = params.classSelector;
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
          selectorAsWidget.classList.add(self.classSelector);
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
          selectorAsWidget.classList.remove(self.classSelector);
        }
      }
    });
  };

  window.KtWidget = KtWidget;
})();


new KtWidget({ selectorOpen: "#card-listopen-1", selectorWidget: "#card-listview-1", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-2", selectorWidget: "#card-listview-2", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-3", selectorWidget: "#card-listview-3", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-4", selectorWidget: "#card-listview-4", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-5", selectorWidget: "#card-listview-5", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-6", selectorWidget: "#card-listview-6", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-7", selectorWidget: "#card-listview-7", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-8", selectorWidget: "#card-listview-8", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-9", selectorWidget: "#card-listview-9", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-10", selectorWidget: "#card-listview-10", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-11", selectorWidget: "#card-listview-11", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-12", selectorWidget: "#card-listview-12", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-13", selectorWidget: "#card-listview-13", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-14", selectorWidget: "#card-listview-14", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-15", selectorWidget: "#card-listview-15", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#card-listopen-16", selectorWidget: "#card-listview-16", classSelector: "show_listview" });
new KtWidget({ selectorOpen: "#navbar_open", selectorWidget: "#navbar_drop", classSelector: "show_dropdown" });
new KtWidget({ selectorOpen: "#navbar_open", selectorWidget: "#navbar_drop", classSelector: "show_dropdown" });
new KtWidget({ selectorOpen: "#sidenav_explore", selectorWidget: "#sidenav_explore_open", classSelector: "show_side" });
new KtWidget({ selectorOpen: "#exit-btn", selectorWidget: "#exit-modal", classSelector: "show_exit_modal" });

