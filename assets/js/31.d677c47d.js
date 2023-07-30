(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1938:function(s,t,a){s.exports=a.p+"assets/img/1627101188845-6100b223-a454-4b62-8b99-0cfde7484043.7b97c978.png"},1939:function(s,t,a){s.exports=a.p+"assets/img/1627101188846-38d85bdc-e314-422b-826d-597e6f35fda9.8d14576c.png"},1940:function(s,t,a){s.exports=a.p+"assets/img/1627101188928-956200fe-d824-4bde-be56-dbcbb3740e57.f83f5662.png"},1941:function(s,t,a){s.exports=a.p+"assets/img/1627101188932-083630f6-6c3c-4da7-8142-a54838c38b89.bae4a712.png"},1942:function(s,t,a){s.exports=a.p+"assets/img/1627101188945-38394fea-10dd-4468-bd53-6e84eb6ee92e.92a8c844.png"},1943:function(s,t,a){s.exports=a.p+"assets/img/1627101189394-c354d5af-7667-43da-8502-abfe660cc187.639ef39e.png"},1944:function(s,t,a){s.exports=a.p+"assets/img/1627101189407-53ec9913-b883-4197-bf94-77738574bb36.81481102.png"},1945:function(s,t,a){s.exports=a.p+"assets/img/1627101189466-19eafe1d-5cc1-4985-adb8-57f5e266fb78.ae458ae4.png"},1946:function(s,t,a){s.exports=a.p+"assets/img/1627101189674-d97a4fde-738c-4f08-9c8b-545b81debd5a.b6ded5a2.png"},3080:function(s,t,a){"use strict";a.r(t);var e=a(64),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"windows-cryptoapi欺骗漏洞-cve-2020-0601"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-cryptoapi欺骗漏洞-cve-2020-0601"}},[s._v("#")]),s._v(" Windows CryptoAPI欺骗漏洞 CVE-2020-0601")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("1月15日，微软发布了针对CVE-2020-0601的安全补丁，该漏洞是微软在实现椭圆曲线加密算法数字证书验证时产生，可被利用于伪造来自可信任来源的签名或证书，并且因其业务特性会衍生出多种攻击向量，具有极高的可利用价值和极大的潜在破坏力，Win 10和windows server 2016 & 2019也都在其影响范围内。该漏洞由美国NSA国家安全局发现后汇报给微软公司，也被认为是第一个NSA公开披露的软件系统漏洞，当然也有可能存在其特殊的战术目的。绿盟科技M01N攻击安全研究团队对此漏洞原理进行了详细分析并复现了多种可能的攻击方法，提出了详细的检测及整改方案。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("带有指定参数的ECC密钥的证书的Microsoft Windows版本,依赖于Windows CryptoAPI的应用程序")]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("CVE-2020-0601的根源是微软的加密库"),t("code",[s._v("crypt32.dll")]),s._v("中椭圆曲线加密算法的实现问题，首先我们来了解一下椭圆加密算法的基本原理。")]),s._v(" "),t("p",[s._v("要形象地理解椭圆曲线加密算法，可以结合图形来看，以下是一个符合椭圆曲线的方程"),t("code",[s._v("y2 = x3 + ax + b")]),s._v("，图像如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1938),alt:"img"}})]),s._v(" "),t("p",[s._v("椭圆曲线具有的一些独特的性质使它适合用于加密算法：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("椭圆曲线关于x轴对称")])]),s._v(" "),t("li",[t("p",[s._v("任何一条非垂直的线与曲线最多有三个点相交")])]),s._v(" "),t("li",[t("p",[s._v("曲线是光滑的，即曲线的所有点都没有两个或者两个以上的不同的切线")])])]),s._v(" "),t("p",[s._v("在椭圆曲线上任意两点A、B（若A、B重合则作A的切线），作直线交于椭圆曲线另一点C，过C做y轴的平行线与椭圆曲线交于C点，定义A+B=C。椭圆曲线的加法符合交换律和结合律。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1939),alt:"img"}})]),s._v(" "),t("p",[s._v("如果A、B是同一个点，则过A作椭圆曲线的切线，以同样的方法得到对应的结果 C=2A 。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1940),alt:"img"}})]),s._v(" "),t("p",[s._v("接下来是椭圆曲线加密相关的重点，如果对多个A进行累加,则可依次累加连线得到nA的值 。")]),s._v(" "),t("p",[s._v("起点为A，终点D=3A，阶为3 。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1941),alt:"img"}})]),s._v(" "),t("p",[s._v("起点为A，终点G=4A，阶为4。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1942),alt:"img"}})]),s._v(" "),t("p",[s._v("椭圆曲线加密")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1943),alt:"img"}})]),s._v(" "),t("p",[s._v("考虑K=kG，其中K、G为椭圆曲线Ep(a,b)上的点，n为G的阶。k为小于n的整数。则给定k和G，根据加法法则，计算K很容易（只要逐次求解）但反过来，给定K和G，求k就非常困难。因为实际使用中的ECC原则上把私钥k取得相当大，n也相当大，且椭圆曲线不再连续而是在实数内离散的值，要把n个解点逐一算出几乎是不可能的。这就是椭圆曲线加密算法的数学依据 。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("点G称为基点")])]),s._v(" "),t("li",[t("p",[s._v("k(k<n)为私有密钥")])]),s._v(" "),t("li",[t("p",[s._v("K为公开密钥")])])]),s._v(" "),t("p",[s._v("椭圆曲线加密算法（ECC）和RSA一样是一种公开密钥加密技术，对原始数据以公钥加密，以私钥解密，即便攻击者获取密文和公钥也无法（在合理的时间或代价下）解密获取明文。")]),s._v(" "),t("p",[s._v("同样的，椭圆曲线加密算法（ECC）也被用于数字签名，以私钥加密生成签名，以公钥解密验证签名，如果和原文一样则签名验证成功。")]),s._v(" "),t("p",[s._v("公开密钥加密之所以可靠是因为它们利用了公钥密码领域的单向函数原理，正向操作非常简单，而逆向操作非常困难。")]),s._v(" "),t("p",[s._v("由G（基点）出发，进行k（私钥）次变换，只要按部就班地计算，就能很容易地得到终点K（公钥）的值。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1944),alt:"img"}})]),s._v(" "),t("p",[s._v("已知起点G（基点）和终点K（公钥），要逆推得到移动次数k（私钥）则是一个很难的问题（最佳算法也达到了全指数复杂度）")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1945),alt:"img"}})]),s._v(" "),t("p",[s._v("相比传统RSA加密算法，椭圆加密算法具有着天生的优势，椭圆加密算法的逆向过程相比RSA有着更大的时间复杂度。在密钥长度相同的情况下，椭圆加密算法相比RSA具有更好的安全强度。一般认为，160比特的椭圆曲线密钥即可提供与1024比特的RSA密钥相当的安全强度。")]),s._v(" "),t("p",[s._v("较短的密钥也意味着更少的存储空间、更快的加解密速度和更少的带宽消耗，正因为椭圆加密算法的这些优势，它被用于Windows的签名系统、https的证书、比特币系统和中国的二代身份证系统中。")]),s._v(" "),t("p",[s._v("虽然椭圆曲线加密算法具有着许多优势，纯算法角度破解难度极大，微软对此算法的实现的缺漏却给漏洞利用提供了可乘之机。回到椭圆曲线加密最基本的等式 K=kG，首先需要明确的是，虽然对于给定的基点G和公钥K，要求解私钥k很困难，但是如果可以任意指定基点G，要构造一对k和G使等式成立却极其简单；最简单的情况，令基点G=K，则私钥k=1，这样一对基点和私钥可以使等式成立，也是有效的解。")]),s._v(" "),t("p",[s._v("在正常的标准椭圆曲线算法中，基点G并不是随意指定的，而是有固定的值（标准的作用，便是对基点G等参数的选择做出规定），例如在secp256r1版本的椭圆曲线算法中，基点G应当为标准规定的固定值，如果对参数不加验证，使得用户可以自定义传入的基点G的值（作为函数的参数），上面的私钥k=1的特殊解即可成立。")]),s._v(" "),t("p",[s._v("在有漏洞版本的crypt32.dll中验证使用ECC算法签名部分的函数恰恰是这个情况，原先的函数未加参数验证，参与计算的基点G的内容由被验证的证书随意指定，使未授权的证书能够构建私钥k=1的特殊解来成功通过椭圆加密算法的签名验证的过程。")]),s._v(" "),t("p",[s._v("让我们以CVE-2020-0601的一个POC为例来解析虚假密钥的构建过程：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("require "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'openssl'")]),s._v("\n\nraw "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" File.read ARGV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取使用ECC算法的证书文件")]),s._v("\nca "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OpenSSL::X509::Certificate.new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("raw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取使用ECC算法的证书")]),s._v("\nca_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ca.public_key  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从证书中提取公钥ca_key")]),s._v("\n\nca_key.private_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置私钥为1，使得公钥K==1*基点G的等式成立")]),s._v("\ngroup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ca_key.group \ngroup.set_generator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ca_key.public_key, group.order, group.cofactor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngroup.asn1_flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OpenSSL::PKey::EC::EXPLICIT_CURVE\nca_key.group "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" group        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用构建的假基点G和假密钥k设置新group")]),s._v("\nFile.open"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spoofed_ca.key"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" f.write ca_key.to_pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将新的group写入文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("修补后的Crypt32.dll中椭圆曲线加密算法的函数已加入了参数验证的部分，解决了由自由指定参数G导致的构造第二个特殊的有效密钥的问题。")]),s._v(" "),t("p",[s._v("一处验证机制的失误导致信任链的连锁反应。")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1946),alt:"img"}})]),s._v(" "),t("p",[s._v("现代的安全系统中存在着“信任链”的概念，信任链的上下级存在一种类似单向担保的关系，子级证书的可靠性由签名其的父级证书担保。签名时由根证书开始一级级向下签名，验证时则逐层溯源验证，直到找到信任的根证书文件，构成了一条信任链。位于整个“信任链”最上方的是最为重要不需要自证身份的根证书。根证书一般随系统附带或由管理员安装在系统内。")]),s._v(" "),t("p",[s._v("这个漏洞的存在则使得构造的无效签名通过了验证机制，使本应断裂的信任链被利用，逐级担保继续下去，最终使非法内容获得了证书所有者的合法签名身份。")]),s._v(" "),t("h2",{attrs:{id:"漏洞poc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"https://github.com/ollypwn/CurveBall",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"http://blog.nsfocus.net/cve-2020-0601-windows-cryptoapi%E6%AC%BA%E9%AA%97%E6%BC%8F%E6%B4%9E%E5%88%86%E6%9E%90/",description:"",showIcon:""}}),s._v(" "),t("br")],1)}),[],!1,null,null,null);t.default=r.exports}}]);