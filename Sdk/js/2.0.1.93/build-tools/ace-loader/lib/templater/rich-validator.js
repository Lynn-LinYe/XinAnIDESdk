const richNativeTag={div:{},a:{textContent:!0,children:["span"],attrs:{visited:{enum:["false","true"]},href:{},value:{}}},button:{textContent:!0,atomic:!0,selfClosing:!0,attrs:{type:{enum:["capsule","circle","text","arc","download"]},value:{},icon:{},waiting:{enum:["false","true"]}}},text:{textContent:!0,children:["a","span"],attrs:{value:{}}},span:{textContent:!0,children:["span"],excludeRoot:!0,parents:["text","span"],uevents:[],attrs:{}},image:{alias:["img"],events:["error","complete"],atomic:!0,selfClosing:!0,attrs:{src:{checkPath:!0},alt:{checkPath:!0}}},"image-animator":{atomic:!0,selfClosing:!0,events:["start","pause","stop","resume"],attrs:{images:{required:!0},iteration:{},reverse:{enum:["false","true"]},fixedsize:{enum:["true","false"]},duration:{required:!0},fillmode:{enum:["forwards","none"]}}},divider:{atomic:!0,selfClosing:!0,uattrs:{vertical:{enum:["false","true"]},id:{},style:{},class:{},ref:{},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},tid:{},show:{excludeRoot:!0,def:"true"},shareid:{},data:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]}},uevents:[]},menu:{events:["selected","cancel"],uevents:[],children:["option"],uattrs:{target:{},title:{},type:{enum:["click","longpress"]},id:{},class:{},style:{},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},show:{excludeRoot:!0,def:"true"},tid:{},shareid:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]}}},"navigation-bar":{events:["backclick","startclick","endclick"],uevents:[],children:["navigation-menu","select"],attrs:{type:{enum:["normal","emphasize"]},title:{required:!0},subtitle:{},header:{},backenabled:{enum:["false","true"]},starticon:{},endicon:{},logo:{}}},"navigation-menu":{events:["selected"],uevents:[],children:["option"],attrs:{}},calendar:{atomic:!0,selfClosing:!0,events:["selectedchange"],uevents:[],attrs:{date:{checkFunc:"date"},dateadapter:{required:!0}}},chart:{atomic:!0,selfClosing:!0,attrs:{type:{enum:["bar","line","gauge"],required:!0},percent:{def:0,checkFunc:"number"},options:{},datasets:{}}},dialog:{events:["cancel"],uevents:[],uattrs:{id:{},style:{},class:{},ref:{},disabled:{enum:["false","true"]},data:{},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},tid:{},show:{excludeRoot:!0,def:"true"},shareid:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]}}},slider:{atomic:!0,selfClosing:!0,events:["change"],attrs:{min:{def:0,checkFunc:"number"},max:{def:100,checkFunc:"number"},step:{def:1,checkFunc:"number"},value:{def:0,checkFunc:"number"},type:{enum:["continuous","intermittent"]},minicon:{},maxicon:{}}},list:{events:["scroll","scrollbottom","scrolltop","scrollend","scrolltouchup","requestitem"],children:["list-item","list-item-group"],attrs:{scrollpage:{enum:["false","true"]},cachedcount:{def:0,checkFunc:"number"},scrollbar:{enum:["off","auto","on"]},scrolleffect:{enum:["spring","fade","no"]},indexer:{enum:["false","true"]},shapemode:{enum:["default","rect","round"]},itemscale:{enum:["true","false"]},itemopacity:{enum:["true","false"]},itemcenter:{enum:["false","true"]},updateeffect:{enum:["false","true"]},scrollvibrate:{enum:["true","false"]},initialindex:{def:0,checkFunc:"number"},initialoffset:{checkFunc:"length"}}},"list-item":{excludeRoot:!0,parents:["list","list-item-group"],events:["sticky"],attrs:{type:{},primary:{enum:["false","true"]},section:{},sticky:{enum:["none","normal","opacity"]},stickyradius:{checkFunc:"length"},clickeffect:{enum:["true","false"]}}},"list-item-group":{excludeRoot:!0,parents:["list"],children:["list-item"],events:["groupclick","groupcollapse","groupexpand"],attrs:{type:{}}},block:{excludeRoot:!0,uattrs:{for:{},tid:{},if:{def:"true"},elif:{def:"true"},else:{}}},slot:{atomic:!0,selfClosing:!0,excludeRoot:!0,selfClosing:!0,uattrs:{content:{}}},input:{atomic:!0,selfClosing:!0,events:["change","enterkeyclick"],attrs:{checked:{enum:["false","true"]},type:{enum:["text","button","checkbox","email","date","time","number","password","radio"]},name:{},value:{},placeholder:{},enterkeytype:{enum:["default","next","go","done","send","search"]},maxlength:{checkFunc:"number"},headericon:{}}},marquee:{atomic:!0,selfClosing:!0,events:["bounce","finish","start"],attrs:{scrollamount:{def:6,checkFunc:"number"},loop:{def:-1,checkFunc:"number"},direction:{enum:["left","right"]}}},refresh:{events:["refresh","pulldown"],uevents:[],attrs:{refreshing:{enum:["false","true"]},offset:{checkFunc:"length"},type:{enum:["auto","pulldown"]},lasttime:{enum:["false","true"]},friction:{checkFunc:"number"}}},swiper:{events:["change","rotation"],attrs:{autoplay:{enum:["false","true"]},indicator:{enum:["true","false"]},indicatormask:{enum:["false","true"]},index:{checkFunc:"number"},interval:{checkFunc:"number"},loop:{enum:["true","false"]},duration:{checkFunc:"number"},vertical:{enum:["false","true"]},digital:{enum:["false","true"]}}},search:{events:["change","submit"],atomic:!0,selfClosing:!0,attrs:{icon:{},hint:{},value:{}}},progress:{atomic:!0,selfClosing:!0,events:[],uattrs:{id:{},style:{},class:{},ref:{},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},tid:{},show:{excludeRoot:!0,def:"true"},shareid:{},data:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]},type:{enum:["horizontal","circular","ring","scale-ring","arc"]},percent:{checkFunc:"number"},secondarypercent:{checkFunc:"number"},clockwise:{enum:["false","true"]}}},picker:{events:["change","columnchange","cancel"],atomic:!0,selfClosing:!0,uevents:["focus","blur","longpress","key","swipe","accessibility","touchstart","touchmove","touchcancel","touchend"],attrs:{type:{enum:["text","date","time","datetime","multi-text"]},start:{checkFunc:"date"},end:{checkFunc:"date"},range:{},selected:{},value:{},containsecond:{enum:["false","true"]},columns:{checkFunc:"number"},lunarswitch:{enum:["false","true"]},hours:{enum:["24","12"]},lunar:{enum:["false","true"]}}},"picker-view":{atomic:!0,selfClosing:!0,events:["change","columnchange"],uevents:[],attrs:{type:{enum:["text","time","date","datetime","multi-text"]},range:{},selected:{},indicatorprefix:{},indicatorsuffix:{},containsecond:{enum:["false","true"]},start:{checkFunc:"date"},end:{checkFunc:"date"},lunarswitch:{enum:["false","true"]},columns:{checkFunc:"number"},hours:{enum:["24","12"]},lunar:{enum:["false","true"]}}},qrcode:{atomic:!0,selfClosing:!0,attrs:{value:{required:!0},type:{enum:["rect","circle"]}}},switch:{atomic:!0,events:["change"],selfClosing:!0,attrs:{checked:{enum:["false","true"]},showtext:{enum:["false","true"]},texton:{},textoff:{}}},label:{textContent:!0,atomic:!0,selfClosing:!0,attrs:{target:{}},uevents:[]},textarea:{atomic:!0,selfClosing:!0,textContent:!0,events:["change"],attrs:{placeholder:{},maxlength:{checkFunc:"number"},headericon:{},extend:{enum:["false","true"]}}},video:{atomic:!0,selfClosing:!0,events:["start","pause","finish","error","prepared","fullscreenchange","timeupdate","seeked","seeking"],attrs:{autoplay:{enum:["false","true"]},poster:{checkPath:!0},src:{checkPath:!0},muted:{enum:["false","true"]},controls:{enum:["true","false"]}}},audio:{atomic:!0,selfClosing:!0,attrs:{streamType:{enum:["music","voicecall"]}}},camera:{atomic:!0,selfClosing:!0,events:["error"],attrs:{deviceposition:{enum:["back","front"]},flash:{enum:["auto","on","off","torch"]}}},canvas:{atomic:!0,selfClosing:!0,events:[],attrs:{}},stack:{events:[],uattrs:{id:{},style:{},class:{},ref:{},disabled:{enum:["false","true"]},for:{excludeRoot:!0},tid:{},shareid:{},focusable:{enum:["false","true"]},data:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]}}},tabs:{events:["change"],children:["tab-content","tab-bar"],attrs:{index:{def:0,checkFunc:"number"},vertical:{enum:["false","true"]}}},"tab-content":{parents:["tabs"],attrs:{scrollable:{enum:["true","false"]}}},"tab-bar":{parents:["tabs"],attrs:{mode:{enum:["fixed","scrollable"]}}},popup:{children:["text"],events:["visibilitychange"],attrs:{target:{required:!0},placement:{enum:["bottom","left","right","top","topLeft","topRight","bottomLeft","bottomRight"]}}},rating:{atomic:!0,selfClosing:!0,events:["change"],attrs:{numstars:{checkFunc:"number"},rating:{checkFunc:"number"},stepsize:{checkFunc:"number"},indicator:{enum:["false","true"]}},uevents:["focus","blur","key","swipe","accessibility","touchstart","touchmove","touchcancel","touchend"]},select:{textContent:!0,events:["change"],children:["option"],uevents:["focus","blur","longpress","key","swipe","accessibility","touchstart","touchmove","touchcancel","touchend"]},option:{atomic:!0,selfClosing:!0,excludeRoot:!0,valueContent:!0,parents:["select","menu","navigation-menu"],uevents:[],uattrs:{id:{},class:{},style:{},focusable:{enum:["false","true"]},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},show:{excludeRoot:!0,def:"true"},tid:{},shareid:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]},selected:{enum:["false","true"]},value:{required:!0},icon:{},action:{enum:["popup","show"]}}}},richCommonTag={events:["click","focus","blur","longpress","touchstart","touchmove","touchcancel","touchend","swipe","key","accessibility"],attrs:{id:{},style:{},class:{},ref:{},disabled:{enum:["false","true"]},focusable:{enum:["false","true"]},data:{},if:{excludeRoot:!0,def:"true"},elif:{def:"true"},else:{excludeRoot:!0},for:{excludeRoot:!0},tid:{},show:{excludeRoot:!0,def:"true"},shareid:{},voicelabel:{},subscriptlabel:{},scenelabel:{enum:["video","audio","page","switch","common"]},subscriptflag:{enum:["auto","on","off"]},accessibilitygroup:{enum:["false","true"]},accessibilitytext:{},accessibilitydescription:{},accessibilityimportance:{enum:["auto","yes","no","no-hide-descendants"]}},children:["block","slot"],parents:["block"]};module.exports={richCommonTag:richCommonTag,richNativeTag:richNativeTag};