(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Operators,Default,List,HTML5,_,SiteCommon,Billing,Remoting,T,String,Seq,jQuery,Math,Nav,EventsPervasives,ClaimInput,Concurrency,window,Claims,ClaimController,ContactUs,ConfirmationState,Unchecked,Policies,Website,MIScript;
 Runtime.Define(Global,{
  "":{
   Billing:{
    BillingPage:function()
    {
     var header,_this,arg00,_this1,arg001,content,_this2,arg002,_this3,arg003,page,x,_this4,arg004,f,f1;
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([SiteCommon.homeButton(),Default.H1(List.ofArray([Default.Text("Billing History")]))]));
     content=Operators.add(Default.Div(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"content")))])),List.ofArray([Default.UL(List.ofArray([(_this3=HTML5.Attr(),(arg003="data-"+"role",_this3.NewAttr(arg003,"listview"))),Default.Id("billingHistory")]))]));
     page=(x=Operators.add(Default.Div(List.ofArray([Default.Id("billing"),(_this4=HTML5.Attr(),(arg004="data-"+"role",_this4.NewAttr(arg004,"page")))])),List.ofArray([header,content,SiteCommon.footer({
      $:2
     })])),(f=(f1=function()
     {
      return Billing.LoadBillingInfo();
     },function(e)
     {
      return SiteCommon.OnShow(f1,e);
     }),(f(x),x)));
     return page;
    },
    LoadBillingInfo:function()
    {
     var bills,patternInput,x,f,folder,listItems,children,f1,jqlist,x1,f2,f3;
     bills=Remoting.Call("Website:1",[]);
     patternInput=(x=[0,Runtime.New(T,{
      $:0
     })],(f=(folder=Runtime.Tupled(function(tupledArg)
     {
      var prevYear,acc;
      prevYear=tupledArg[0];
      acc=tupledArg[1];
      return function(bill)
      {
       var changed,nextYear,item,_this,arg00;
       changed=prevYear!==bill.Year;
       nextYear=changed?bill.Year:prevYear;
       item=changed?Operators.add(Default.LI(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"list-divider")))])),List.ofArray([Default.Text(String(bill.Year))])):Operators.add(Default.LI(Runtime.New(T,{
        $:0
       })),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text(bill.Month)])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text(" $"),Default.Text(String(bill.Amount))]))]))]));
       return[nextYear,Runtime.New(T,{
        $:1,
        $0:item,
        $1:acc
       })];
      };
     }),Runtime.Tupled(function(state)
     {
      return function(list)
      {
       return Seq.fold(folder,state,list);
      };
     })),(f(x))(bills)));
     listItems=patternInput[1];
     children=Operators.add(Default.Div(Runtime.New(T,{
      $:0
     })),(f1=function(list)
     {
      return List.rev(list);
     },f1(listItems)));
     jqlist=jQuery("#billingHistory");
     x1=jqlist.html(children.get_Html());
     f2=function(value)
     {
      value;
     };
     f2(x1);
     f3=function(arg00)
     {
      return arg00.listview("refresh");
     };
     return f3(jqlist);
    }
   },
   ClaimInput:{
    ClaimIputPage:function()
    {
     var lat,lon,selectedPolicyId,claimDescription,nonce,header,_this,arg00,_this1,arg001,x,_this2,arg002,_this3,arg003,_this4,arg004,f,x1,x3,_this5,arg005,_this6,arg006,_this7,arg007,f2,x4,content,_this8,arg008,x5,x6,_this9,arg009,_thisa,f3,x7,_thisb,arg00a,x8,_thisc,_thisd,_thise,_thisf,_this10,_this11,arg00b,x9,_this12,_this13,xa,f4,xb,page,xd,_this14,arg00c,f5,f6;
     lat={
      contents:0
     };
     lon={
      contents:0
     };
     selectedPolicyId={
      contents:{
       $:0
      }
     };
     claimDescription={
      contents:{
       $:0
      }
     };
     nonce={
      contents:Math.random()
     };
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([(x=Operators.add(Default.A(List.ofArray([Default.HRef("#"),(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"delete"))),(_this4=HTML5.Attr(),(arg004="data-"+"inline",_this4.NewAttr(arg004,"true")))])),List.ofArray([Default.Text("Cancel")])),(f=(x1=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#claims");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     }),(f(x),x))),Default.H1(List.ofArray([Default.Text("New Claim")])),(x3=Operators.add(Default.A(List.ofArray([Default.HRef("#"),(_this5=HTML5.Attr(),(arg005="data-"+"role",_this5.NewAttr(arg005,"button"))),(_this6=HTML5.Attr(),(arg006="data-"+"icon",_this6.NewAttr(arg006,"check"))),(_this7=HTML5.Attr(),(arg007="data-"+"inline",_this7.NewAttr(arg007,"true")))])),List.ofArray([Default.Text("Save")])),(f2=(x4=function()
     {
      return function()
      {
       var matchValue,desc,pid,claim,Location;
       matchValue=[selectedPolicyId.contents,claimDescription.contents];
       if(matchValue[0].$==1)
        {
         if(matchValue[1].$==1)
          {
           desc=matchValue[1].$0;
           pid=matchValue[0].$0;
           claim=(Location={
            Lat:lat.contents,
            Lon:lon.contents
           },{
            Id:"",
            PolicyId:pid,
            PolicyType:"",
            Description:desc,
            Location:Location,
            Status:"open"
           });
           Remoting.Call("Website:3",[claim]);
           return Nav.showNotification("New claim saved","#claims");
          }
         else
          {
           return Nav.showDialog("Policy and description are required");
          }
        }
       else
        {
         return Nav.showDialog("Policy and description are required");
        }
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x4,arg10);
     }),(f2(x3),x3)))]));
     content=Operators.add(Default.Div(List.ofArray([(_this8=HTML5.Attr(),(arg008="data-"+"role",_this8.NewAttr(arg008,"content")))])),List.ofArray([(x5=(x6=List.ofArray([(_this9=HTML5.Attr(),(arg009="data-"+"role",_this9.NewAttr(arg009,"controlgroup"))),Default.Id("policychoice")]),(_thisa=Default.Tags(),_thisa.NewTag("fieldset",x6))),(f3=(x7=function()
     {
      var v,x2,f1;
      v=jQuery("input[type=radio]:checked").val();
      selectedPolicyId.contents=(x2=String(v),(f1=function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },f1(x2)));
     },function(arg10)
     {
      return EventsPervasives.Events().OnChange(x7,arg10);
     }),(f3(x5),x5))),Operators.add(Default.Div(List.ofArray([(_thisb=HTML5.Attr(),(arg00a="data-"+"role",_thisb.NewAttr(arg00a,"fieldcontain")))])),List.ofArray([Operators.add((x8=List.ofArray([(_thisc=Default.Attr(),_thisc.NewAttr("for","locText"))]),(_thisd=Default.Tags(),_thisd.NewTag("label",x8))),List.ofArray([Default.Text("Location")])),Default.Input(List.ofArray([Default.Id("locText"),(_thise=Default.Attr(),_thise.NewAttr("type","text")),(_thisf=Default.Attr(),_thisf.NewAttr("readonly","true")),(_this10=Default.Attr(),_this10.NewAttr("style","background:lightgray"))]))])),Operators.add(Default.Div(List.ofArray([(_this11=HTML5.Attr(),(arg00b="data-"+"role",_this11.NewAttr(arg00b,"fieldcontain")))])),List.ofArray([Operators.add((x9=List.ofArray([(_this12=Default.Attr(),_this12.NewAttr("for","descText"))]),(_this13=Default.Tags(),_this13.NewTag("label",x9))),List.ofArray([Default.Text("Description")])),(xa=Default.TextArea(List.ofArray([Default.Id("descText")])),(f4=(xb=function(x2)
     {
      var xc,f1;
      claimDescription.contents=(xc=x2.Body.textContent,(f1=function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },f1(xc)));
     },function(arg10)
     {
      return EventsPervasives.Events().OnChange(xb,arg10);
     }),(f4(xa),xa)))]))]));
     page=(xd=Operators.add(Default.Div(List.ofArray([Default.Id("newClaim"),(_this14=HTML5.Attr(),(arg00c="data-"+"role",_this14.NewAttr(arg00c,"page")))])),List.ofArray([header,content])),(f5=(f6=function()
     {
      var matchValue,x2,f1,xc,f7,xe,f8,fb;
      matchValue=Nav.direction();
      if(matchValue.$==0)
       {
        ClaimInput.LoadPolicies();
        selectedPolicyId.contents={
         $:0
        };
        claimDescription.contents={
         $:0
        };
        x2=jQuery("#descText").text("");
        f1=function(value)
        {
         value;
        };
        f1(x2);
        xc=jQuery("#locText").val("getting location...");
        f7=function(value)
        {
         value;
        };
        f7(xc);
        xe=(f8=function()
        {
         var xf,f9;
         xf=ClaimInput.GetPosition();
         f9=function(_arg1)
         {
          var coords,posTxt,x10,fa;
          coords=_arg1.coords;
          posTxt=String([coords.latitude,coords.longitude]);
          x10=jQuery("#locText").val(posTxt);
          fa=function(value)
          {
           value;
          };
          fa(x10);
          return Concurrency.Return(null);
         };
         return Concurrency.Bind(xf,f9);
        },Concurrency.Delay(f8));
        fb=function(arg00d)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00d);
        };
        return fb(xe);
       }
      else
       {
        return null;
       }
     },function(e)
     {
      return SiteCommon.OnShow(f6,e);
     }),(f5(xd),xd)));
     return page;
    },
    GetPosition:function()
    {
     var callback;
     callback=Runtime.Tupled(function(tupledArg)
     {
      var onOk,_arg1,_arg2;
      onOk=tupledArg[0];
      _arg1=tupledArg[1];
      _arg2=tupledArg[2];
      return window.navigator.geolocation.getCurrentPosition(onOk);
     });
     return Concurrency.FromContinuations(function(ok)
     {
      return function(no)
      {
       return callback([ok,no,function(value)
       {
        value;
       }]);
      };
     });
    },
    LoadPolicies:function()
    {
     var policies,children,a,x,_this,b,x4,f,x5,f1;
     policies=Remoting.Call("Website:4",[]);
     children=Operators.add(Default.Div(Runtime.New(T,{
      $:0
     })),(a=List.ofArray([(x=List.ofArray([Default.Text("Policy")]),(_this=Default.Tags(),_this.NewTag("legend",x)))]),(b=Seq.toList(Seq.delay(function()
     {
      return Seq.collect(function(p)
      {
       var _this1,_this2,_this3,x1;
       return Seq.append([Default.Input(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("type","radio")),(_this2=Default.Attr(),_this2.NewAttr("name","pchoice")),Default.Id("p"+p.Id),(_this3=Default.Attr(),(x1=p.Id,_this3.NewAttr("value",x1)))]))],Seq.delay(function()
       {
        var x2,_this4,x3,_this5;
        return[Operators.add((x2=List.ofArray([(_this4=Default.Attr(),(x3="p"+p.Id,_this4.NewAttr("for",x3)))]),(_this5=Default.Tags(),_this5.NewTag("label",x2))),List.ofArray([Default.Text(p.Type)]))];
       }));
      },policies);
     })),List.append(a,b))));
     x4=jQuery("#policychoice").html(children.get_Html());
     f=function(value)
     {
      value;
     };
     f(x4);
     x5=jQuery("#newClaim").children(":jqmData(role=content)").trigger("create");
     f1=function(value)
     {
      value;
     };
     return f1(x5);
    }
   },
   Claims:{
    ClaimController:{
     ViewDetail:function(claim)
     {
      var page,contentSection,content,x,f,f1;
      page=jQuery("#claimDetail");
      contentSection=page.children(":jqmData(role=content)");
      content=Claims.ClaimsPageDetailContent(claim);
      x=contentSection.html(content.get_Html());
      f=function(value)
      {
       value;
      };
      f(x);
      f1=function(p)
      {
       return Nav.forward(p);
      };
      return f1(page);
     }
    },
    ClaimsDetailPage:function()
    {
     var header,_this,arg00,_this1,arg001,x,_this2,arg002,_this3,arg003,_this4,arg004,f,x1,content,_this5,arg005,page,_this6,arg006;
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([SiteCommon.homeButton(),Default.H1(List.ofArray([Default.Text("Claim Detail")])),(x=Operators.add(Default.A(List.ofArray([Default.HRef("#"),(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"back"))),(_this4=HTML5.Attr(),(arg004="data-"+"inline",_this4.NewAttr(arg004,"true")))])),List.ofArray([Default.Text("Back")])),(f=(x1=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#claims");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     }),(f(x),x)))]));
     content=Operators.add(Default.Div(List.ofArray([(_this5=HTML5.Attr(),(arg005="data-"+"role",_this5.NewAttr(arg005,"content")))])),Runtime.New(T,{
      $:0
     }));
     page=Operators.add(Default.Div(List.ofArray([Default.Id("claimDetail"),(_this6=HTML5.Attr(),(arg006="data-"+"role",_this6.NewAttr(arg006,"page")))])),List.ofArray([header,content]));
     return page;
    },
    ClaimsPage:function()
    {
     var header,_this,arg00,_this1,arg001,x,_this2,arg002,_this3,arg003,_this4,arg004,f,x1,content,_this5,arg005,_this6,arg006,page,_this8,arg007;
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([SiteCommon.homeButton(),Default.H1(List.ofArray([Default.Text("Claims")])),(x=Operators.add(Default.A(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"plus"))),(_this4=HTML5.Attr(),(arg004="data-"+"inline",_this4.NewAttr(arg004,"true")))])),List.ofArray([Default.Text("New")])),(f=(x1=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#newClaim");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     }),(f(x),x)))]));
     content=Operators.add(Default.Div(List.ofArray([(_this5=HTML5.Attr(),(arg005="data-"+"role",_this5.NewAttr(arg005,"content")))])),List.ofArray([Operators.add(Default.UL(List.ofArray([(_this6=HTML5.Attr(),(arg006="data-"+"role",_this6.NewAttr(arg006,"listview")))])),Seq.toList(Seq.delay(function()
     {
      return Seq.map(function(p)
      {
       var x2,_this7,f1,x3;
       return Operators.add(Default.LI(Runtime.New(T,{
        $:0
       })),List.ofArray([(x2=Operators.add(Default.A(Runtime.New(T,{
        $:0
       })),List.ofArray([Default.Div(List.ofArray([Default.Text("Claim Id: "),Default.Text(p.Id)])),Operators.add(Default.Div(List.ofArray([(_this7=Default.Attr(),_this7.NewAttr("style","font-size:smaller"))])),List.ofArray([Default.Text("Policy: #"),Default.Text(p.PolicyId),Default.Text("   ["),Default.Text(p.PolicyType),Default.Text("]")]))])),(f1=(x3=function()
       {
        return function()
        {
         return ClaimController.ViewDetail(p);
        };
       },function(arg10)
       {
        return EventsPervasives.Events().OnClick(x3,arg10);
       }),(f1(x2),x2)))]));
      },Remoting.Call("Website:2",[]));
     })))]));
     page=Operators.add(Default.Div(List.ofArray([Default.Id("claims"),(_this8=HTML5.Attr(),(arg007="data-"+"role",_this8.NewAttr(arg007,"page")))])),List.ofArray([header,content,SiteCommon.footer({
      $:1
     })]));
     return page;
    },
    ClaimsPageDetailContent:function(claim)
    {
     var _this,_this1,_this2,_this3,_this4;
     return Operators.add(Default.Div(Runtime.New(T,{
      $:0
     })),List.ofArray([Operators.add(Default.Div(Runtime.New(T,{
      $:0
     })),List.ofArray([Operators.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px")),Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Claim ID")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text(claim.Id)]))])),Operators.add(Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("style","font-weight:bold; font-size:smaller; background:#E0FFFF; padding:5px")),Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Type")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text(claim.PolicyType)]))])),Operators.add(Default.Div(List.ofArray([(_this2=Default.Attr(),_this2.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px")),Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Description")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text(claim.Description)]))])),Operators.add(Default.Div(List.ofArray([(_this3=Default.Attr(),_this3.NewAttr("style","font-weight:bold; font-size:smaller; background:#E0FFFF; padding:5px")),Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Location")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef(Claims.MapUrl(claim.Location,claim.Id))])),List.ofArray([Default.Text("Map")]))]))])),Operators.add(Default.Div(List.ofArray([(_this4=Default.Attr(),_this4.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px")),Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Status")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text(claim.Status)]))]))]))]));
    },
    MapUrl:function(loc,id)
    {
     return"http://bing.com/maps/default.aspx?sp=point."+String(loc.Lat)+"_"+String(loc.Lon)+"_Claim%20"+id;
    }
   },
   ContactUs:{
    ContactUsPage:function()
    {
     var feedbackText,header,_this,arg00,_this1,arg001,content,_this2,arg002,_this3,x,_this4,arg003,x1,_this5,_this6,_this7,f,x2,x5,_this8,arg004,f2,x6,page,x7,_this9,arg005,f3,f4;
     feedbackText={
      contents:""
     };
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([SiteCommon.homeButton(),Default.H1(List.ofArray([Default.Text("Contact Us")]))]));
     content=Operators.add(Default.Div(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"content"))),(_this3=Default.Attr(),_this3.NewAttr("id","contactuscontent"))])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Company:")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text("XYZ Co.")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a")])),List.ofArray([Default.Text("Phone:")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b")])),List.ofArray([Default.Text("(555)-123-4567")]))])),(x=Operators.add(Default.Div(List.ofArray([(_this4=HTML5.Attr(),(arg003="data-"+"role",_this4.NewAttr(arg003,"fieldcontain")))])),List.ofArray([Operators.add((x1=List.ofArray([(_this5=Default.Attr(),_this5.NewAttr("for","feedbackText"))]),(_this6=Default.Tags(),_this6.NewTag("label",x1))),List.ofArray([Default.Text("Feedback:")])),Default.TextArea(List.ofArray([Default.Id("feedbackText"),(_this7=Default.Attr(),_this7.NewAttr("style","background-color:yellow"))]))])),(f=(x2=function(x3)
     {
      var x4,f1;
      feedbackText.contents=x3.Body.textContent;
      x4=jQuery("#feedbackText").text("");
      f1=function(value)
      {
       value;
      };
      return f1(x4);
     },function(arg10)
     {
      return EventsPervasives.Events().OnChange(x2,arg10);
     }),(f(x),x))),(x5=Operators.add(Default.A(List.ofArray([(_this8=HTML5.Attr(),(arg004="data-"+"role",_this8.NewAttr(arg004,"button")))])),List.ofArray([Default.Text("Submit")])),(f2=(x6=function()
     {
      return function()
      {
       var x3,f1;
       x3=jQuery("#contactuscontent").animate({
        opacity:0.1
       },2000,function()
       {
        return ContactUs.SubmitFeedback(feedbackText.contents);
       });
       f1=function(value)
       {
        value;
       };
       return f1(x3);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x6,arg10);
     }),(f2(x5),x5)))]));
     page=(x7=Operators.add(Default.Div(List.ofArray([Default.Id("contactus"),(_this9=HTML5.Attr(),(arg005="data-"+"role",_this9.NewAttr(arg005,"page")))])),List.ofArray([header,content,SiteCommon.footer({
      $:3
     })])),(f3=(f4=function()
     {
      var x3,f1;
      feedbackText.contents="";
      x3=jQuery("#contactuscontent").css("opacity","1.0");
      f1=function(value)
      {
       value;
      };
      return f1(x3);
     },function(e)
     {
      return SiteCommon.OnBeforeShow(f4,e);
     }),(f3(x7),x7)));
     return page;
    },
    SubmitFeedback:function(text)
    {
     var resp;
     resp=Remoting.Call("Website:0",[text]);
     return Nav.showNotification(resp,"#policies");
    }
   },
   Policies:{
    PoliciesPage:function()
    {
     var header,_this,arg00,_this1,arg001,content,_this2,arg002,_this3,arg003,_this4,page,_thisd,arg005;
     header=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"header"))),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"b")))])),List.ofArray([SiteCommon.homeButton(),Default.H1(List.ofArray([Default.Text("Policies")]))]));
     content=Operators.add(Default.Div(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"content")))])),List.ofArray([Operators.add(Default.UL(List.ofArray([(_this3=HTML5.Attr(),(arg003="data-"+"role",_this3.NewAttr(arg003,"listview"))),(_this4=Default.Attr(),_this4.NewAttr("style","margin-left:-50px"))])),Seq.toList(Seq.delay(function()
     {
      return Seq.map(function(p)
      {
       var _this5,arg004,_this6,_this7,_this8,_this9,_thisa,_thisb,_thisc;
       return Operators.add(Default.OL(List.ofArray([(_this5=HTML5.Attr(),(arg004="data-"+"role",_this5.NewAttr(arg004,"collapsible")))])),List.ofArray([Default.H3(List.ofArray([Default.Text(p.Type),Default.Text(" "),Default.Text(p.Id)])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-grid-a")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a"),(_this6=Default.Attr(),_this6.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px"))])),List.ofArray([Default.Text("Premium")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b"),(_this7=Default.Attr(),_this7.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px"))])),List.ofArray([Default.Text(String(p.Premium))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a"),(_this8=Default.Attr(),_this8.NewAttr("style","font-weight:bold; font-size:smaller; background:#E0FFFF; padding:5px"))])),List.ofArray([Default.Text("Coverage")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b"),(_this9=Default.Attr(),_this9.NewAttr("style","font-weight:bold; font-size:smaller; background:#E0FFFF; padding:5px"))])),List.ofArray([Default.Text(String(p.Coverage))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-a"),(_thisa=Default.Attr(),_thisa.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px"))])),List.ofArray([Default.Text("Expires")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-block-b"),(_thisb=Default.Attr(),_thisb.NewAttr("style","font-weight:bold; font-size:smaller; background:#D6EBFF; padding:5px"))])),List.ofArray([Default.Text(String(p.Expires))]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("ui-grid-solo"),(_thisc=Default.Attr(),_thisc.NewAttr("style","font-size:smaller; background:#F5F5FF; padding:5px"))])),List.ofArray([Default.Text(p.Description)]))]));
      },Remoting.Call("Website:4",[]));
     })))]));
     page=Operators.add(Default.Div(List.ofArray([Default.Id("policies"),(_thisd=HTML5.Attr(),(arg005="data-"+"role",_thisd.NewAttr(arg005,"page")))])),List.ofArray([header,content,SiteCommon.footer({
      $:0
     })]));
     return page;
    }
   },
   SiteCommon:{
    ConfirmationState:{
     g_msg:Runtime.Field(function()
     {
      return{
       contents:""
      };
     }),
     g_next:Runtime.Field(function()
     {
      return{
       contents:""
      };
     }),
     g_no:Runtime.Field(function()
     {
      return{
       contents:""
      };
     }),
     g_yes:Runtime.Field(function()
     {
      return{
       contents:""
      };
     })
    },
    Nav:{
     back:function()
     {
      var x,f,objectArg;
      if(Nav.n_prev().contents!=="")
       {
        Nav.n_dir().contents={
         $:1
        };
        x=jQuery("#"+Nav.n_prev().contents);
        f=(objectArg=jQuery.mobile,function(arg00)
        {
         return objectArg.changePage(arg00);
        });
        return f(x);
       }
      else
       {
        return null;
       }
     },
     dialogClose:function()
     {
      return Nav.back();
     },
     direction:function()
     {
      return Nav.n_dir().contents;
     },
     forward:function(p)
     {
      var toPageId,fromPageId,f,objectArg;
      toPageId=p.attr("id");
      fromPageId=jQuery.mobile.activePage.attr("id");
      if(toPageId!==fromPageId)
       {
        Nav.n_prev().contents=fromPageId;
        Nav.n_dir().contents={
         $:0
        };
       }
      f=(objectArg=jQuery.mobile,function(arg00)
      {
       return objectArg.changePage(arg00);
      });
      return f(p);
     },
     n_dir:Runtime.Field(function()
     {
      return{
       contents:{
        $:0
       }
      };
     }),
     n_prev:Runtime.Field(function()
     {
      return{
       contents:""
      };
     }),
     notificationClose:function()
     {
      var x,f,objectArg;
      Nav.n_dir().contents={
       $:0
      };
      x=jQuery(ConfirmationState.g_next().contents);
      f=(objectArg=jQuery.mobile,function(arg00)
      {
       return objectArg.changePage(arg00);
      });
      return f(x);
     },
     showDialog:function(msg)
     {
      var x,f;
      ConfirmationState.g_msg().contents=msg;
      x=jQuery("#messageDialog");
      f=function(p)
      {
       return Nav.forward(p);
      };
      return f(x);
     },
     showNotification:function(msg,nextPage)
     {
      var cp;
      ConfirmationState.g_msg().contents=msg;
      ConfirmationState.g_next().contents=nextPage;
      cp={};
      cp.transition="pop";
      return jQuery.mobile.changePage(jQuery("#notificationDialog"),cp);
     }
    },
    OnBeforeShow:function(f,e)
    {
     var jQ;
     jQ=jQuery(e.get_Body());
     return jQ.on("pagebeforeshow",f);
    },
    OnShow:function(f,e)
    {
     var jQ;
     jQ=jQuery(e.get_Body());
     return jQ.on("pageshow",f);
    },
    dialogPage:function()
    {
     var x,_this,arg00,_this1,arg001,x1,_this2,arg002,_this3,arg003,f,x2,f1,f2;
     x=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"page"))),Default.Id("messageDialog"),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"e")))])),List.ofArray([Operators.add(Default.H1(List.ofArray([Default.Id("messageText")])),List.ofArray([Default.Text("...")])),(x1=Operators.add(Default.A(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"back")))])),List.ofArray([Default.Text("Close")])),(f=(x2=function()
     {
      return function()
      {
       return Nav.dialogClose();
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x2,arg10);
     }),(f(x1),x1)))]));
     f1=(f2=function()
     {
      var x3,f3;
      x3=jQuery("#messageText").text(ConfirmationState.g_msg().contents);
      f3=function(value)
      {
       value;
      };
      return f3(x3);
     },function(e)
     {
      return SiteCommon.OnBeforeShow(f2,e);
     });
     f1(x);
     return x;
    },
    footer:function(page)
    {
     var _this,arg00,_this1,arg001,x,a,_this2,arg002,_this3,arg003,_this4,arg004,b,f,x1,x3,a1,_this5,arg005,_this6,arg006,_this7,arg007,b1,f2,x4,x5,a2,_this8,arg008,_this9,arg009,_thisa,arg00a,b2,f3,x6,x7,a3,_thisb,arg00b,_thisc,arg00c,_thisd,arg00d,b3,f4,x8;
     return Operators.add(Default.Div(List.ofArray([Default.Id("footer"+String(page)),(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"footer"))),(_this1=HTML5.Attr(),(arg001="data-"+"position",_this1.NewAttr(arg001,"fixed"))),Default.Attr().Class("ui-bar")])),List.ofArray([(x=Operators.add(Default.A((a=List.ofArray([Default.HRef("#"),(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"home"))),(_this4=HTML5.Attr(),(arg004="data-"+"iconpos",_this4.NewAttr(arg004,"top")))]),(b=Seq.toList(Seq.delay(function()
     {
      if(Unchecked.Equals(page,{
       $:0
      }))
       {
        return[Default.Attr().Class("ui-btn-active")];
       }
      else
       {
        return Seq.empty();
       }
     })),List.append(a,b)))),List.ofArray([Default.Text("Policies")])),(f=(x1=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#policies");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     }),(f(x),x))),(x3=Operators.add(Default.A((a1=List.ofArray([Default.HRef("#"),(_this5=HTML5.Attr(),(arg005="data-"+"role",_this5.NewAttr(arg005,"button"))),(_this6=HTML5.Attr(),(arg006="data-"+"icon",_this6.NewAttr(arg006,"star"))),(_this7=HTML5.Attr(),(arg007="data-"+"iconpos",_this7.NewAttr(arg007,"top")))]),(b1=Seq.toList(Seq.delay(function()
     {
      if(Unchecked.Equals(page,{
       $:1
      }))
       {
        return[Default.Attr().Class("ui-btn-active")];
       }
      else
       {
        return Seq.empty();
       }
     })),List.append(a1,b1)))),List.ofArray([Default.Text("Claims")])),(f2=(x4=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#claims");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x4,arg10);
     }),(f2(x3),x3))),(x5=Operators.add(Default.A((a2=List.ofArray([Default.HRef("#"),(_this8=HTML5.Attr(),(arg008="data-"+"role",_this8.NewAttr(arg008,"button"))),(_this9=HTML5.Attr(),(arg009="data-"+"icon",_this9.NewAttr(arg009,"grid"))),(_thisa=HTML5.Attr(),(arg00a="data-"+"iconpos",_thisa.NewAttr(arg00a,"top")))]),(b2=Seq.toList(Seq.delay(function()
     {
      if(Unchecked.Equals(page,{
       $:2
      }))
       {
        return[Default.Attr().Class("ui-btn-active")];
       }
      else
       {
        return Seq.empty();
       }
     })),List.append(a2,b2)))),List.ofArray([Default.Text("Billing")])),(f3=(x6=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#billing");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x6,arg10);
     }),(f3(x5),x5))),(x7=Operators.add(Default.A((a3=List.ofArray([Default.HRef("#"),(_thisb=HTML5.Attr(),(arg00b="data-"+"role",_thisb.NewAttr(arg00b,"button"))),(_thisc=HTML5.Attr(),(arg00c="data-"+"icon",_thisc.NewAttr(arg00c,"info"))),(_thisd=HTML5.Attr(),(arg00d="data-"+"iconpos",_thisd.NewAttr(arg00d,"top")))]),(b3=Seq.toList(Seq.delay(function()
     {
      if(Unchecked.Equals(page,{
       $:3
      }))
       {
        return[Default.Attr().Class("ui-btn-active")];
       }
      else
       {
        return Seq.empty();
       }
     })),List.append(a3,b3)))),List.ofArray([Default.Text("Contact Us")])),(f4=(x8=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#contactus");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x8,arg10);
     }),(f4(x7),x7)))]));
    },
    homeButton:function()
    {
     var x,_this,arg00,_this1,arg001,_this2,arg002,_this3,arg003,f,x1;
     x=Default.A(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"button"))),(_this1=HTML5.Attr(),(arg001="data-"+"icon",_this1.NewAttr(arg001,"home"))),(_this2=HTML5.Attr(),(arg002="data-"+"mini",_this2.NewAttr(arg002,"true"))),(_this3=HTML5.Attr(),(arg003="data-"+"iconpos",_this3.NewAttr(arg003,"notext")))]));
     f=(x1=function()
     {
      return function()
      {
       var x2,f1;
       x2=jQuery("#policies");
       f1=function(p)
       {
        return Nav.forward(p);
       };
       return f1(x2);
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x1,arg10);
     });
     f(x);
     return x;
    },
    notificationPage:function()
    {
     var x,_this,arg00,_this1,arg001,x1,_this2,arg002,_this3,arg003,f,x2,f1,f2;
     x=Operators.add(Default.Div(List.ofArray([(_this=HTML5.Attr(),(arg00="data-"+"role",_this.NewAttr(arg00,"page"))),Default.Id("notificationDialog"),(_this1=HTML5.Attr(),(arg001="data-"+"theme",_this1.NewAttr(arg001,"e")))])),List.ofArray([Operators.add(Default.H1(List.ofArray([Default.Id("notificationMessage")])),List.ofArray([Default.Text("...")])),(x1=Operators.add(Default.A(List.ofArray([(_this2=HTML5.Attr(),(arg002="data-"+"role",_this2.NewAttr(arg002,"button"))),(_this3=HTML5.Attr(),(arg003="data-"+"icon",_this3.NewAttr(arg003,"check")))])),List.ofArray([Default.Text("Ok")])),(f=(x2=function()
     {
      return function()
      {
       return Nav.notificationClose();
      };
     },function(arg10)
     {
      return EventsPervasives.Events().OnClick(x2,arg10);
     }),(f(x1),x1)))]));
     f1=(f2=function()
     {
      var x3,f3;
      x3=jQuery("#notificationMessage").text(ConfirmationState.g_msg().contents);
      f3=function(value)
      {
       value;
      };
      return f3(x3);
     },function(e)
     {
      return SiteCommon.OnBeforeShow(f2,e);
     });
     f1(x);
     return x;
    }
   }
  },
  Website:{
   MIScript:{
    Main:function()
    {
     var rootPage,claimsPage,notificationPage,dialogPage,claimDetail,newClaim,billingPage,contactusPage,pages,x,f,f1;
     jQuery.mobile.pushStateEnabled=false;
     rootPage=Policies.PoliciesPage();
     claimsPage=Claims.ClaimsPage();
     notificationPage=SiteCommon.notificationPage();
     dialogPage=SiteCommon.dialogPage();
     claimDetail=Claims.ClaimsDetailPage();
     newClaim=ClaimInput.ClaimIputPage();
     billingPage=Billing.BillingPage();
     contactusPage=ContactUs.ContactUsPage();
     pages=List.ofArray([rootPage,dialogPage,notificationPage,claimsPage,claimDetail,newClaim,contactusPage,billingPage]);
     x=Default.Div(pages);
     f=(f1=function()
     {
      var f2,action,x3,f5,objectArg;
      f2=(action=function(elt)
      {
       var x1,x2,f3,f4;
       x1=(x2=jQuery(elt.Body),(f3=function(arg00)
       {
        return arg00.page();
       },f3(x2)));
       f4=function(value)
       {
        value;
       };
       return f4(x1);
      },function(list)
      {
       return Seq.iter(action,list);
      });
      f2(pages);
      x3=jQuery(rootPage.Body);
      f5=(objectArg=jQuery.mobile,function(arg00)
      {
       return objectArg.changePage(arg00);
      });
      return f5(x3);
     },function(w)
     {
      return Operators.OnAfterRender(f1,w);
     });
     f(x);
     return x;
    }
   },
   MobileInsuranceViewer:Runtime.Class({
    get_Body:function()
    {
     return MIScript.Main();
    }
   })
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Operators=Runtime.Safe(Html.Operators);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  HTML5=Runtime.Safe(Default.HTML5);
  _=Runtime.Safe(Global[""]);
  SiteCommon=Runtime.Safe(_.SiteCommon);
  Billing=Runtime.Safe(_.Billing);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  T=Runtime.Safe(List.T);
  String=Runtime.Safe(Global.String);
  Seq=Runtime.Safe(WebSharper.Seq);
  jQuery=Runtime.Safe(Global.jQuery);
  Math=Runtime.Safe(Global.Math);
  Nav=Runtime.Safe(SiteCommon.Nav);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  ClaimInput=Runtime.Safe(_.ClaimInput);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  window=Runtime.Safe(Global.window);
  Claims=Runtime.Safe(_.Claims);
  ClaimController=Runtime.Safe(Claims.ClaimController);
  ContactUs=Runtime.Safe(_.ContactUs);
  ConfirmationState=Runtime.Safe(SiteCommon.ConfirmationState);
  Unchecked=Runtime.Safe(WebSharper.Unchecked);
  Policies=Runtime.Safe(_.Policies);
  Website=Runtime.Safe(Global.Website);
  return MIScript=Runtime.Safe(Website.MIScript);
 });
 Runtime.OnLoad(function()
 {
  Nav.n_prev();
  Nav.n_dir();
  ConfirmationState.g_yes();
  ConfirmationState.g_no();
  ConfirmationState.g_next();
  ConfirmationState.g_msg();
 });
}());
