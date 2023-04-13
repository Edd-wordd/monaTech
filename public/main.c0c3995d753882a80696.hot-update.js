/*! For license information please see main.c0c3995d753882a80696.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/forms/ContactForm.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _styles_forms_ContactForm_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/forms/ContactForm.styles */ "./src/components/styles/forms/ContactForm.styles.js");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _data_contactFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/contactFormData */ "./src/data/contactFormData.js");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Hidden/Hidden.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _br,\n  _br2,\n  _br3,\n  _br4,\n  _CircularProgress,\n  _AlertTitle,\n  _AlertTitle2,\n  _strong,\n  _AlertTitle3,\n  _strong2,\n  _s = __webpack_require__.$Refresh$.signature();\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nfunction ContactForm(props) {\n  _s();\n  const classes = (0,_styles_forms_ContactForm_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles)(props);\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [alert, setAlert] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [isButtonDisabled, setIsButtonDisabled] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n    firstName: \'\',\n    lastName: \'\',\n    phoneNumber: \'\',\n    email: \'\',\n    companyName: \'\',\n    message: \'\',\n    startDate: \'\',\n    whereDidYouHearAboutUs: \'\'\n  });\n  const handleChange = e => {\n    setValue({\n      ...value,\n      [e.target.name]: e.target.value\n    });\n  };\n  const phoneCheck = async phone => {\n    const phoneRegex = /^\\+(?:[0-9] ?){6,14}[0-9]$/;\n    if (phone.trim().match(phoneRegex)) {\n      const myHeaders = new Headers();\n      myHeaders.append(\'apikey\', \'GIB3A34mUj4lMeoT38zEpKyrTOV0K4OA\');\n      const requestOptions = {\n        method: \'GET\',\n        redirect: \'follow\',\n        headers: myHeaders\n      };\n      try {\n        const response = await fetch(`https://api.apilayer.com/number_verification/validate?number=${phone}`, requestOptions);\n        const data = await response.json();\n        console.log(data, \'data in phoneCheck APi\');\n        return data.valid;\n      } catch (error) {\n        console.error(error);\n        return false;\n      }\n    }\n    return false;\n  };\n  const emailCheck = async email => {\n    const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63})$/;\n\n    // /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/\n\n    if (email.trim().match(emailRegex)) {\n      const myHeaders = new Headers();\n      myHeaders.append(\'apikey\', \'GIB3A34mUj4lMeoT38zEpKyrTOV0K4OA\');\n      const requestOptions = {\n        method: \'GET\',\n        redirect: \'follow\',\n        headers: myHeaders\n      };\n      try {\n        const response = await fetch(`https://api.apilayer.com/email_verification/check?email=${email}`, requestOptions);\n        const data = await response.json();\n        console.log(data, \'data in emailCheck API\');\n        console.log(data.smtp_check, \'data.smtp_check\');\n        return data.smtp_check;\n      } catch (error) {\n        console.error(error);\n        return false;\n      }\n    }\n    return false;\n  };\n  let errors = {};\n  const validate = () => {\n    const nameRegex = \'^[a-zA-Z]{2,20}$\';\n    errors = {};\n    errors.firstName = value.firstName.trim().match(nameRegex) ? \'\' : \'Please enter your first name\';\n    errors.lastName = value.lastName.trim().match(nameRegex) ? \'\' : \'Please enter your last name\';\n    errors.companyName = value.companyName.trim() ? \'\' : \'Please enter company name or url\';\n    errors.message = value.message ? \'\' : \'Please let us know how we can help you\';\n    errors.startDate = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkPreviousDate)(value.startDate) ? \'\' : \'Please enter a start date for your project\';\n    errors.whereDidYouHearAboutUs = value.whereDidYouHearAboutUs ? \'\' : \'Please select a source\';\n    setError({\n      ...errors\n    });\n    return Object.values(errors).every(errValues => errValues === \'\');\n  };\n  const handleSubmit = async e => {\n    e.preventDefault();\n    setIsButtonDisabled(true);\n    const data = new FormData(e.target);\n    data.append(\'timeStamp\', new Date());\n    console.log(Object.fromEntries(data));\n    const simpleData = Object.fromEntries(data);\n    const [phoneIsValid, emailIsValid] = await Promise.all([phoneCheck(simpleData.phoneNumber), emailCheck(simpleData.email)]);\n    if (!validate()) {\n      setIsButtonDisabled(false);\n      setError({\n        ...errors,\n        phoneNumber: \'Please enter valid phone number\',\n        email: \'Please enter valid email\'\n      });\n      return;\n    }\n    if (validate() && phoneIsValid && emailIsValid) {\n      setError(false);\n      setValue({\n        firstName: \'\',\n        lastName: \'\',\n        phoneNumber: \'\',\n        email: \'\',\n        companyName: \'\',\n        message: \'\',\n        startDate: \'\',\n        whereDidYouHearAboutUs: \'\'\n      });\n      try {\n        axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(\'/api/form\', simpleData).then(res => {\n          console.log(res, \'data is here\');\n          setAlert(true);\n          setIsButtonDisabled(false);\n          setIsLoading(false);\n        }).catch(err => {\n          console.log(err);\n          setIsButtonDisabled(false);\n          setIsLoading(false);\n        });\n      } catch (error) {\n        console.log(error);\n        setIsButtonDisabled(false);\n      }\n    } else if (!phoneIsValid && !emailIsValid) {\n      setError({\n        phoneNumber: \'Please enter valid phone number\',\n        email: \'Please enter valid email\'\n      });\n      setIsButtonDisabled(false);\n    } else if (!emailIsValid) {\n      setError({\n        email: \'Please enter valid email\'\n      });\n      setIsButtonDisabled(false);\n    } else if (!phoneIsValid) {\n      setError({\n        phoneNumber: \'Please enter valid phone number\'\n      });\n      setIsButtonDisabled(false);\n    } else {\n      setError({\n        phoneNumber: \'Please enter valid phone number\'\n        // email: \'Please enter valid email\',\n      });\n\n      setIsButtonDisabled(false);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "xl"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "column",\n    justifyContent: "center",\n    alignItems: "flex-start",\n    className: classes.leftSideInfoWrapper,\n    item: true,\n    xl: 6,\n    lg: 5,\n    md: 10,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "h2",\n    className: classes.infoHeading\n  }, "Get in Touch with Our Experts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "h6",\n    className: classes.infoSubTitle\n  }, "Reach Out for Any Questions or Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "body1",\n    className: classes.infoParagraph\n  }, "Our team is here to help you with any inquiries, concerns, or feedback you may have. Whether you\'re looking for assistance on a project, seeking expert advice, or just want to say hello, don\'t hesitate to reach out.", _br || (_br = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), _br2 || (_br2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), "Use our contact form to send us a message, and our team of specialists will be ready to provide the support you need. We pride ourselves on delivering exceptional customer service and are committed to ensuring your satisfaction.", _br3 || (_br3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), _br4 || (_br4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), "Contact us today! We look forward to hearing from you and discovering how we can help you achieve your software development objectives.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    item: true,\n    lg: 5\n  }, isLoading ? _CircularProgress || (_CircularProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    elevation: 3,\n    className: classes.formPaper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: classes.form,\n    noValidate: true,\n    autoComplete: "off",\n    onSubmit: handleSubmit\n  }, !alert && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    open: Boolean(error),\n    autoHideDuration: 6000,\n    onClose: () => setError(Boolean(false))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    onClose: () => setError(Boolean(false)),\n    variant: "filled",\n    severity: "error"\n  }, _AlertTitle || (_AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Error")), `You are missing ${Object.values(error).filter(err => err !== \'\').length} ${Object.values(error).filter(err => err !== \'\').length > 1 ? \'fields! Please fill them out.\' : \'field! Please fill it out.\'}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {\n    smDown: true\n  }, alert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    onClose: () => setAlert(Boolean(false)),\n    severity: "success",\n    className: classes.successAlert\n  }, _AlertTitle2 || (_AlertTitle2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Success")), "Your form has been sent Successfully!", _strong || (_strong = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Thank you!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {\n    mdUp: true\n  }, alert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    open: Boolean(alert),\n    autoHideDuration: 6000,\n    onClose: () => setAlert(Boolean(false))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    onClose: () => setAlert(Boolean(false)),\n    severity: "success"\n  }, _AlertTitle3 || (_AlertTitle3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Success")), "Your form has been sent Successfully!", _strong2 || (_strong2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Thank you!"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center",\n    alignItems: "center"\n  }, _data_contactFormData__WEBPACK_IMPORTED_MODULE_3__.formFieldInputs.map(values => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({\n    key: values.id\n  }, values, {\n    error: !!error[values.name],\n    helperText: error[values.name] || \' \',\n    onChange: handleChange,\n    value: value[values.name],\n    className: classes.textField,\n    autoFocus: values.name === \'firstName\'\n  }), _data_contactFormData__WEBPACK_IMPORTED_MODULE_3__.selectInputs.map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({\n    key: value.label\n  }, value), value.value)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "flex-end",\n    alignItems: "center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"]\n  // className={classes.submitBtn}\n  , {\n    sx: {\n      margin: \'1.5rem 0rem\',\n      padding: \'.5rem 4rem\'\n    },\n    type: "submit",\n    size: "large",\n    variant: "contained",\n    color: "primary",\n    id: "submit",\n    disabled: !!(alert || error || isButtonDisabled),\n    "aria-label": "Submit Form"\n  }, "SUBMIT"))))))));\n}\n_s(ContactForm, "+iCzIzpFAl/by+UV0whuAyNmy+c=", false, function () {\n  return [_styles_forms_ContactForm_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles];\n});\n_c = ContactForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "ContactForm");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/forms/ContactForm.jsx?')}},(function(e){e.h=()=>"8302c03dbbe6b292b7bc"}));