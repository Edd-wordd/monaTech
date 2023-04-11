/*! For license information please see main.08055446faccb892a1d1.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/ServicesOffered.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Hidden/Hidden.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");\n/* harmony import */ var _mui_icons_material_MenuBook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MenuBook */ "./node_modules/@mui/icons-material/MenuBook.js");\n/* harmony import */ var _styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sections/ServicesOffered.styles */ "./src/components/styles/sections/ServicesOffered.styles.js");\n/* harmony import */ var _data_serviceOfferedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/serviceOfferedData */ "./src/data/serviceOfferedData.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _MenuBookIcon,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nfunction ServicesOffered(props) {\n  _s();\n  const classes = (0,_styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles)(props);\n  const scrollToTop = () => {\n    window.scrollTo(0, 0);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    maxWidth: "xl"\n  }, _data_serviceOfferedData__WEBPACK_IMPORTED_MODULE_2__["default"].map((service, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    key: service.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-around",\n    alignItems: "center",\n    className: classes.wrapper,\n    id: `wrapper_${index}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdDown: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, index % 2 === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdUp: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    variant: "h4",\n    className: classes.titles\n  }, service.serviceOffered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.line\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    className: classes.servicePara\n  }, service.serviceDetails), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "column",\n    justifyContent: "center",\n    alignItems: "flex-end",\n    className: classes.btnWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    endIcon: _MenuBookIcon || (_MenuBookIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MenuBook__WEBPACK_IMPORTED_MODULE_8__["default"], null)),\n    variant: "contained",\n    color: "primary",\n    size: "large",\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,\n    to: service.path,\n    onClick: scrollToTop\n  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdDown: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, index % 2 === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  })))))))));\n}\n_s(ServicesOffered, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {\n  return [_styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles];\n});\n_c = ServicesOffered;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesOffered);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "ServicesOffered");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/ServicesOffered.jsx?')},"./src/components/styles/sections/ServicesOffered.styles.js":(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStyles\": () => (/* binding */ useStyles)\n/* harmony export */ });\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/makeStyles/makeStyles.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nconst useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(theme => ({\n  titleWrapper: {\n    marginTop: theme.spacing(6)\n  },\n  title: {\n    paddingBottom: theme.spacing(2),\n    color: theme.palette.charcoal.main\n  },\n  subTitle: {\n    marginTop: theme.spacing(2)\n  },\n  wrapper: {\n    padding: '5rem 0rem',\n    [theme.breakpoints.down('md')]: {\n      padding: '2rem 0rem'\n    }\n  },\n  wrapperBg: index => ({\n    backgroundImage: `linear-gradient(45deg, ${index % 2 === 0 ? '#f4f1fa' : '#fff'} 30%, ${index % 2 === 0 ? '#fff' : '#f4f1fa'} 90%)`\n  }),\n  line: {\n    width: '350px',\n    height: '1px',\n    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'\n  },\n  titles: {\n    paddingBottom: theme.spacing(3),\n    [theme.breakpoints.down('md')]: {\n      paddingTop: theme.spacing(6)\n    }\n  },\n  btnWrapper: {\n    padding: theme.spacing(6)\n  },\n  img: {\n    width: '600px',\n    height: 'auto',\n    borderRadius: '5px',\n    [theme.breakpoints.down('md')]: {\n      width: '100%'\n    }\n  },\n  servicePara: {\n    width: '700px',\n    height: 'auto',\n    color: theme.palette.charcoal.secondary,\n    letterSpacing: theme.spacing(0.2),\n    lineHeight: '1.5rem',\n    [theme.breakpoints.down('md')]: {\n      width: '100%'\n    }\n  },\n  links: {\n    textDecoration: 'none'\n  }\n}));\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/styles/sections/ServicesOffered.styles.js?")}},(function(e){e.h=()=>"b83e20cdc668e45a7b7b"}));