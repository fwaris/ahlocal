(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Formlet,Data,Formlet1,Website,ContactForms,List,Controls,Enhance,FormContainerConfiguration,Html,Default,Operators;
 Runtime.Define(Global,{
  Website:{
   ContactForms:{
    BasicInfoForm:function()
    {
     var x;
     return Data.$(Data.$((x=function(name)
     {
      return function(age)
      {
       return{
        Name:name,
        Age:age
       };
      };
     },Formlet1.Return(x)),ContactForms.input("Name","Please enter your name")),ContactForms.inputInt("Age","Please enter a valid age"));
    },
    ContactInfoForm:function()
    {
     var phone,x,f,f1,address,x1,_builder_;
     phone=(x=ContactForms.input("Phone","Empty phone number not allowed"),(f=(f1=function(arg0)
     {
      return{
       $:0,
       $0:arg0
      };
     },function(formlet)
     {
      return Formlet1.Map(f1,formlet);
     }),f(x)));
     address=Data.$(Data.$(Data.$((x1=function(str)
     {
      return function(cty)
      {
       return function(ctry)
       {
        return{
         $:1,
         $0:{
          Street:str,
          City:cty,
          Country:ctry
         }
        };
       };
      };
     },Formlet1.Return(x1)),ContactForms.input("Street","Empty street not allowed")),ContactForms.input("City","Empty city not allowed")),ContactForms.input("Country","Empty country not allowed"));
     _builder_=Formlet1.Do();
     return _builder_.Delay(function()
     {
      var x2,x3,f2,f3;
      return _builder_.Bind((x2=(x3=List.ofArray([["Phone",phone],["Address",address]]),(f2=function(vls)
      {
       return Controls.Select(0,vls);
      },f2(x3))),(f3=function(formlet)
      {
       return Enhance.WithTextLabel("Contact Method",formlet);
      },f3(x2))),function(_arg1)
      {
       return _builder_.ReturnFrom(_arg1);
      });
     });
    },
    SignupSequence:function()
    {
     var infoForm,x,x1,f,f1,fc,inputRecord,Description,x2,f2,f3,x3,f4,f5,contactForm,x4,x5,f6,f7,fc1,inputRecord1,Description1,x6,f8,f9,x7,fa,fb,proc,flow,xe,_builder_,f10;
     infoForm=(x=(x1=ContactForms.BasicInfoForm(),(f=function(formlet)
     {
      return Enhance.WithSubmitAndResetButtons(formlet);
     },f(x1))),(f1=(fc=(inputRecord=FormContainerConfiguration.get_Default(),(Description=(x2=(f2=function(arg0)
     {
      return{
       $:0,
       $0:arg0
      };
     },f2("Please enter your name and age below.")),(f3=function(arg0)
     {
      return{
       $:1,
       $0:arg0
      };
     },f3(x2))),Runtime.New(FormContainerConfiguration,{
      Header:(x3=(f4=function(arg0)
      {
       return{
        $:0,
        $0:arg0
       };
      },f4("Step 1 - Your name and age")),(f5=function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },f5(x3))),
      Padding:inputRecord.Padding,
      Description:Description,
      BackgroundColor:inputRecord.BackgroundColor,
      BorderColor:inputRecord.BorderColor,
      CssClass:inputRecord.CssClass,
      Style:inputRecord.Style
     }))),function(formlet)
     {
      return Enhance.WithCustomFormContainer(fc,formlet);
     }),f1(x)));
     contactForm=(x4=(x5=ContactForms.ContactInfoForm(),(f6=function(formlet)
     {
      return Enhance.WithSubmitAndResetButtons(formlet);
     },f6(x5))),(f7=(fc1=(inputRecord1=FormContainerConfiguration.get_Default(),(Description1=(x6=(f8=function(arg0)
     {
      return{
       $:0,
       $0:arg0
      };
     },f8("Please enter your phone number or your address below.")),(f9=function(arg0)
     {
      return{
       $:1,
       $0:arg0
      };
     },f9(x6))),Runtime.New(FormContainerConfiguration,{
      Header:(x7=(fa=function(arg0)
      {
       return{
        $:0,
        $0:arg0
       };
      },fa("Step 2 - Your preferred contact information")),(fb=function(arg0)
      {
       return{
        $:1,
        $0:arg0
       };
      },fb(x7))),
      Padding:inputRecord1.Padding,
      Description:Description1,
      BackgroundColor:inputRecord1.BackgroundColor,
      BorderColor:inputRecord1.BorderColor,
      CssClass:inputRecord1.CssClass,
      Style:inputRecord1.Style
     }))),function(formlet)
     {
      return Enhance.WithCustomFormContainer(fc1,formlet);
     }),f7(x4)));
     proc=function(info)
     {
      return function(contact)
      {
       return function()
       {
        var result,phone,address,x8,x9,_this,xa,fd,xc,fe,xd,ff,_this1;
        result=contact.$==0?(phone=contact.$0,"the phone number: "+phone):(address=contact.$0,"the address: "+address.Street+", "+address.City+", "+address.Country);
        x8=List.ofArray([(x9=List.ofArray([Default.Text("Sign-up summary")]),(_this=Default.Tags(),_this.NewTag("legend",x9))),Default.P(List.ofArray([(xa="Hi "+info.Name+"!",(fd=function(xb)
        {
         return Default.Text(xb);
        },fd(xa)))])),Default.P(List.ofArray([(xc="You are "+Global.String(info.Age)+" years old",(fe=function(xb)
        {
         return Default.Text(xb);
        },fe(xc)))])),Default.P(List.ofArray([(xd="Your preferred contact method is via "+result,(ff=function(xb)
        {
         return Default.Text(xb);
        },ff(xd)))]))]);
        _this1=Default.Tags();
        return _this1.NewTag("fieldset",x8);
       };
      };
     };
     flow=(xe=(_builder_=Formlet1.Do(),_builder_.Delay(function()
     {
      return _builder_.Bind(infoForm,function(_arg1)
      {
       return _builder_.Bind(contactForm,function(_arg2)
       {
        return _builder_.ReturnFrom(Formlet1.OfElement((proc(_arg1))(_arg2)));
       });
      });
     })),(f10=function(formlet)
     {
      return Formlet1.Flowlet(formlet);
     },f10(xe)));
     return Operators.add(Default.Div(List.ofArray([Default.H1(List.ofArray([Default.Text("Sign up today!")]))])),List.ofArray([flow]));
    },
    input:function(label,err)
    {
     var x,x1,x2,f,f1,f2;
     x=(x1=(x2=Controls.Input(""),(f=function(arg10)
     {
      return Data.Validator().IsNotEmpty(err,arg10);
     },f(x2))),(f1=function(formlet)
     {
      return Enhance.WithValidationIcon(formlet);
     },f1(x1)));
     f2=function(formlet)
     {
      return Enhance.WithTextLabel(label,formlet);
     };
     return f2(x);
    },
    inputInt:function(label,err)
    {
     var x,x1,x2,x3,f,f1,f2,f3,f4;
     x=(x1=(x2=(x3=Controls.Input(""),(f=Data.Validator().IsInt(err),f(x3))),(f1=function(formlet)
     {
      return Enhance.WithValidationIcon(formlet);
     },f1(x2))),(f2=function(formlet)
     {
      return Enhance.WithTextLabel(label,formlet);
     },f2(x1)));
     f3=(f4=function(value)
     {
      return value<<0;
     },function(formlet)
     {
      return Formlet1.Map(f4,formlet);
     });
     return f3(x);
    }
   },
   SignupSequence:Runtime.Class({
    get_Body:function()
    {
     return ContactForms.SignupSequence();
    }
   })
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Formlet=Runtime.Safe(WebSharper.Formlet);
  Data=Runtime.Safe(Formlet.Data);
  Formlet1=Runtime.Safe(Formlet.Formlet);
  Website=Runtime.Safe(Global.Website);
  ContactForms=Runtime.Safe(Website.ContactForms);
  List=Runtime.Safe(WebSharper.List);
  Controls=Runtime.Safe(Formlet.Controls);
  Enhance=Runtime.Safe(Formlet.Enhance);
  FormContainerConfiguration=Runtime.Safe(Enhance.FormContainerConfiguration);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  return Operators=Runtime.Safe(Html.Operators);
 });
 Runtime.OnLoad(function()
 {
 });
}());
