var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _recyclerlistview=require("recyclerlistview");var React=_interopRequireWildcard(require("react"));var _jsxFileName="/Users/300067164/Documents/PWorkspace/infiniteslideshow/src/RecyclerListViewWrapper.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var RecyclerListViewWrapper=function(_React$Component){(0,_inherits2.default)(RecyclerListViewWrapper,_React$Component);var _super=_createSuper(RecyclerListViewWrapper);function RecyclerListViewWrapper(props){var _this;(0,_classCallCheck2.default)(this,RecyclerListViewWrapper);_this=_super.call(this,props);_this.onVisibleIndicesChanged=function(){var _this$props;(_this$props=this.props).onVisibleIndicesChanged.apply(_this$props,arguments);};_this.onVisibleIndicesChanged=_this.onVisibleIndicesChanged.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(RecyclerListViewWrapper,[{key:"render",value:function render(){var _this$props2=this.props,onVisibleIndicesChanged=_this$props2.onVisibleIndicesChanged,rest=(0,_objectWithoutProperties2.default)(_this$props2,["onVisibleIndicesChanged"]);return React.createElement(_recyclerlistview.RecyclerListView,(0,_extends2.default)({},rest,{onVisibleIndicesChanged:this.onVisibleIndicesChanged,__self:this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:16}}));}}]);return RecyclerListViewWrapper;}(React.Component);var _default=RecyclerListViewWrapper;exports.default=_default;