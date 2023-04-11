/*! For license information please see main.5f5dced65bad208bdc32.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/ServicesMain.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grow/Grow.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sections/SectionHeader */ "./src/components/sections/SectionHeader.jsx");\n/* harmony import */ var _components_buttons_ButtonLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/buttons/ButtonLink */ "./src/components/buttons/ButtonLink.jsx");\n/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");\n/* harmony import */ var _styles_sections_ServicesMain_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sections/ServicesMain.styles */ "./src/components/styles/sections/ServicesMain.styles.js");\n/* harmony import */ var _data_serviceMainData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/serviceMainData */ "./src/data/serviceMainData.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _SectionHeader,\n  _ButtonLink,\n  _s = __webpack_require__.$Refresh$.signature();\n// import React from \'react\'\n// import { Paper, Container, Typography, Grid, Grow } from \'@mui/material\'\n// import SectionHeader from \'../../components/sections/SectionHeader\'\n// import ButtonLink from \'../../components/buttons/ButtonLink\'\n// import Transition from \'react-transition-group/Transition\'\n// import { useStyles } from \'../styles/sections/ServicesMain.styles\'\n// import coreServiceValues from \'../../data/serviceMainData\'\n//\n// function ServicesMain(props) {\n//   const classes = useStyles(props)\n//   const [inProp, setInProp] = React.useState(false)\n//   const cardObs = function (entries, observer) {\n//     const [entry] = entries\n//     // guard clause\n//     if (!entry.isIntersecting) return\n//     if (entry.isIntersecting) {\n//       setInProp(true)\n//       observer.unobserve(entry.target)\n//     }\n//   }\n//\n//   const serviceCardObserver = new IntersectionObserver(cardObs, {\n//     root: null,\n//     threshold: 0.5,\n//   })\n//\n//   React.useEffect(() => {\n//     const target = document.querySelector(\'#servicesMain\')\n//     serviceCardObserver.observe(target)\n//   }, [])\n//\n//   return (\n//     <>\n//       <SectionHeader title="Our Services" subTitle="Bring you ideas to life!" />\n//       <Container maxWidth="lg">\n//         <Grid className={classes.paragraphWrapper}>\n//           <Typography paragraph variant="body1" className={classes.paraInfo}>\n//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis ea! Atque,\n//             ratione cumque. Fugiat earum eius doloribus quo repudiandae, maiores excepturi officia\n//             iusto consequuntur quis odio labore, commodi minima? Lorem ipsum dolor sit amet\n//             consectetur adipisicing elit. Deserunt, officiis ea! Atque, ratione cumque. Fugiat earum\n//             eius doloribus quo repudiandae, maiores excepturi officia iusto consequuntur quis odio\n//             labore, commodi minima? Lorem ipsum dolor sit amet consectetur adipisicing elit.\n//             Deserunt, officiis ea! Atque, ratione cumque. Fugiat earum eius doloribus quo\n//             repudiandae, maiores excepturi officia iusto consequuntur quis odio labore, commodi\n//             minima?8\n//           </Typography>\n//         </Grid>\n//       </Container>\n//       <Container maxWidth="xl">\n//         <Grid\n//           container\n//           direction="row"\n//           justifyContent="space-evenly"\n//           alignItems="center"\n//           id="servicesMain"\n//         >\n//           {coreServiceValues.map((value) => (\n//             <Transition in={!!setInProp} timeout={2000} key={value.id}>\n//               {() => (\n//                 <Grow in={inProp} timeout={2000}>\n//                   <Paper elevation={2} className={classes.boxes} key={value.id}>\n//                     <Typography variant="subtitle1">\n//                       <b>{value.coreTitle}</b>\n//                     </Typography>\n//                     <Typography paragraph variant="body1" className={classes.coreValue}>\n//                       {value.coreValue}\n//                     </Typography>\n//                   </Paper>\n//                 </Grow>\n//               )}\n//             </Transition>\n//           ))}\n//         </Grid>\n//         <ButtonLink linkOne="/contact" btnOneText="Get Started" />\n//       </Container>\n//     </>\n//   )\n// }\n//\n// export default ServicesMain\n\n\n\n\n\n\n\n\nfunction ServicesMain(props) {\n  _s();\n  const classes = (0,_styles_sections_ServicesMain_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)(props);\n  const [inProp, setInProp] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const cardObs = function (entries, observer) {\n    const [entry] = entries;\n    // guard clause\n    if (!entry.isIntersecting) return;\n    if (entry.isIntersecting) {\n      setInProp(true);\n      observer.unobserve(entry.target);\n    }\n  };\n  const serviceCardObserver = new IntersectionObserver(cardObs, {\n    root: null,\n    threshold: 0.5\n  });\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    const target = document.querySelector(\'#servicesMain\');\n    serviceCardObserver.observe(target);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _SectionHeader || (_SectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Expert Services",\n    subTitle: "Transforming Your Ideas into Reality"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "lg"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    className: classes.paragraphWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    variant: "body1",\n    className: classes.paraInfo\n  }, "Discover our comprehensive range of services, designed to meet your unique needs and help you grow. Our team of experts work tirelessly to provide the most innovative and effective solutions, tailored to your business requirements. We take pride in our ability to deliver exceptional results that exceed expectations, ensuring your success in today\'s competitive landscape."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "xl"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-evenly",\n    alignItems: "center",\n    id: "servicesMain"\n  }, _data_serviceMainData__WEBPACK_IMPORTED_MODULE_4__["default"].map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    in: !!setInProp,\n    timeout: 2000,\n    key: value.id\n  }, () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    in: inProp,\n    timeout: 2000\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    elevation: 2,\n    className: classes.boxes,\n    key: value.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "subtitle1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, value.coreTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    variant: "body1",\n    className: classes.coreValue\n  }, value.coreValue)))))), _ButtonLink || (_ButtonLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_buttons_ButtonLink__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    linkOne: "/contact",\n    btnOneText: "Begin Your Journey"\n  }))));\n}\n_s(ServicesMain, "ZrrBJtudpZOqueRcIWB+Fl0zCp0=", false, function () {\n  return [_styles_sections_ServicesMain_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles];\n});\n_c = ServicesMain;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesMain);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "ServicesMain");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/ServicesMain.jsx?')}},(function(e){e.h=()=>"23a8a4a86c472402d0db"}));