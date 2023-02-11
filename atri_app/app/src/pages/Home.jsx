import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useHome_Flex1Cb, useHome_Flex2Cb, useHome_Flex4Cb, useHome_Flex138Cb, useHome_Flex3Cb, useHome_Flex5Cb, useHome_Flex6Cb, useHome_Flex8Cb, useHome_Flex9Cb, useHome_Flex10Cb, useHome_Flex7Cb, useHome_Flex11Cb, useHome_Flex12Cb, useHome_Flex371Cb, useHome_Flex373Cb, useHome_Flex13Cb, useHome_Flex25Cb, useHome_Flex14Cb, useHome_Flex365Cb, useHome_Flex15Cb, useHome_Flex366Cb, useHome_Flex367Cb, useFlex21Cb, useFlex368Cb, useHome_Flex26Cb, useHome_Flex28Cb, useHome_Flex37Cb, useHome_Flex27Cb, useHome_Flex29Cb, useFlex32Cb, useFlex33Cb, useFlex34Cb, useHome_Flex38Cb, useHome_Flex39Cb, useHome_Flex40Cb, useHome_Flex297Cb, useProduct_card_1Cb, useFlex49Cb, useProduct_card_2Cb, useFlex5089Cb, useHome_Flex298Cb, useProduct_card_4Cb, useFlex56Cb, useProduct_card_3Cb, useFlex57123Cb, useHome_Flex58Cb, useHome_Flex57Cb, useFlex69Cb, useProduct_card_7Cb, useFlex61Cb, useProduct_card_8Cb, useFlex62Cb, useFlex70Cb, useProduct_card_6Cb, useFlex63Cb, useProduct_card_5Cb, useFlex64Cb, useHome_Flex59Cb, useHome_Flex60Cb, useHome_Flex62Cb, useHome_Flex61Cb, useHome_Flex63Cb, useFlex77Cb, useFlex89Cb, useFlex79Cb, useFlex80Cb, useFlex81Cb, useFlex82Cb, useFlex97Cb, useFlex91Cb, useFlex92Cb, useFlex93Cb, useFlex94Cb, useFlex95Cb, useFlex96Cb, useFlex98Cb, useHome_Flex71Cb, useFlex100Cb, useFlex103Cb, useFlex104Cb, useFlex105Cb, useFlex108Cb, useFlex109Cb, useFlex112Cb, useFlex110Cb, useFlex111Cb, useFlex101Cb, useFlex102Cb, useHome_Flex90Cb, useFlex114Cb, useFlex116Cb, useFlex117Cb, useFlex118Cb, useFlex115Cb, useFlex119Cb, useFlex120Cb, useFlex121Cb, useFlex122Cb, useFlex125Cb, useFlex123Cb, useFlex124Cb, useFlex128Cb, useFlex126Cb, useFlex127Cb, useFlex131Cb, useHome_Flex110Cb, useFlex133Cb, useFlex134Cb, useFlex135Cb, useFlex136Cb, useFlex137Cb, useFlex138Cb, useHome_Flex117Cb, useFlex140Cb, useFlex143Cb, useFlex141Cb, useFlex147Cb, useFlex148Cb, useFlex149Cb, useFlex142Cb, useFlex144Cb, useFlex146Cb, useImage2Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useButton1Cb, useButton2Cb, useTextBox9Cb, useButton3Cb, useButton4Cb, useTextBox7Cb, useTextBox8Cb, useImage5Cb, useTextBox10Cb, useImage6Cb, useImage10Cb, useImage198Cb, useImage197Cb, useTextBox11Cb, useButton9Cb, useButton10Cb, useImage11Cb, useTextBox14Cb, useTextBox13Cb, useTextBox12Cb, useImage195Cb, useTextBox19Cb, useTextBox20Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useImage17Cb, useImage196Cb, useTextBox30Cb, useTextBox31Cb, useTextBox32Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useButton11Cb, useButton12Cb, useImage19Cb, useTextBox33Cb, useImage1634Cb, useTextBox34Cb, useImage1834Cb, useTextBox36Cb, useImage1734Cb, useTextBox35Cb, useTextBox47Cb, useTextBox48Cb, useProduct_image_1Cb, useProduct_About_1Cb, useProduct_Name_1Cb, useProduct_price_1Cb, useProduct_Name_2Cb, useProduct_About_2Cb, useProduct_image_2Cb, useProducr_price_2Cb, useProduct_image_4Cb, useProduct_About_4Cb, useProduct_Name_4Cb, useProduct_price_4Cb, useProduct_Name_3Cb, useProduct_About_3Cb, useProduct_image_3Cb, useProduct_price_3Cb, useButton13Cb, useButton14Cb, useProduct_image_7Cb, useProduct_About_7Cb, useProduct_Name_7Cb, useProduct_price_7Cb, useProduct_Name_8Cb, useProduct_About_8Cb, useProduct_image_8Cb, useProduct_price_8Cb, useProduct_image_6Cb, useProduct_About_6Cb, useProduct_Name_6Cb, useProduct_price_6Cb, useProduct_Name_5Cb, useProduct_About_5Cb, useProduct_image_5Cb, useProduct_price_5Cb, useTextBox73Cb, useTextBox74Cb, useButton15Cb, useButton16Cb, useImage34Cb, useTextBox76Cb, useTextBox7726Cb, useTextBox75Cb, useImage41Cb, useImage30Cb, useTextBox78Cb, useTextBox79Cb, useImage40Cb, useTextBox80Cb, useTextBox81Cb, useImage31Cb, useImage36Cb, useImage37Cb, useImage38Cb, useImage39Cb, useButton17Cb, useButton18Cb, useImage42Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useImage43Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useImage44Cb, useImage45Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useImage46Cb, useTextBox82Cb, useTextBox83Cb, useTextBox95Cb, useTextBox96Cb, useImage47Cb, useTextBox97Cb, useImage48Cb, useTextBox98Cb, useImage49Cb, useTextBox99Cb, useButton19Cb, useTextBox100Cb, useInput1Cb, useTextBox101Cb, useInput2Cb, useInput3Cb, useTextBox102Cb, useInput4Cb, useTextBox103Cb, useTextBox104Cb, useInput5Cb, useTextBox105Cb, useInput6Cb, useTextBox108Cb, useInput9Cb, useTextBox109Cb, useTextBox110Cb, useImage50Cb, useImage51Cb, useImage52Cb, useImage53Cb, useImage54Cb, useImage55Cb, useImage56Cb, useTextBox111Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useTextBox129Cb, useImage62Cb, useImage63Cb, useImage64Cb, useImage65Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Home_Flex1Props = useStore((state)=>state["Home"]["Home_Flex1"]);
const Home_Flex1IoProps = useIoStore((state)=>state["Home"]["Home_Flex1"]);
const Home_Flex1Cb = useHome_Flex1Cb()
const Home_Flex2Props = useStore((state)=>state["Home"]["Home_Flex2"]);
const Home_Flex2IoProps = useIoStore((state)=>state["Home"]["Home_Flex2"]);
const Home_Flex2Cb = useHome_Flex2Cb()
const Home_Flex4Props = useStore((state)=>state["Home"]["Home_Flex4"]);
const Home_Flex4IoProps = useIoStore((state)=>state["Home"]["Home_Flex4"]);
const Home_Flex4Cb = useHome_Flex4Cb()
const Home_Flex138Props = useStore((state)=>state["Home"]["Home_Flex138"]);
const Home_Flex138IoProps = useIoStore((state)=>state["Home"]["Home_Flex138"]);
const Home_Flex138Cb = useHome_Flex138Cb()
const Home_Flex3Props = useStore((state)=>state["Home"]["Home_Flex3"]);
const Home_Flex3IoProps = useIoStore((state)=>state["Home"]["Home_Flex3"]);
const Home_Flex3Cb = useHome_Flex3Cb()
const Home_Flex5Props = useStore((state)=>state["Home"]["Home_Flex5"]);
const Home_Flex5IoProps = useIoStore((state)=>state["Home"]["Home_Flex5"]);
const Home_Flex5Cb = useHome_Flex5Cb()
const Home_Flex6Props = useStore((state)=>state["Home"]["Home_Flex6"]);
const Home_Flex6IoProps = useIoStore((state)=>state["Home"]["Home_Flex6"]);
const Home_Flex6Cb = useHome_Flex6Cb()
const Home_Flex8Props = useStore((state)=>state["Home"]["Home_Flex8"]);
const Home_Flex8IoProps = useIoStore((state)=>state["Home"]["Home_Flex8"]);
const Home_Flex8Cb = useHome_Flex8Cb()
const Home_Flex9Props = useStore((state)=>state["Home"]["Home_Flex9"]);
const Home_Flex9IoProps = useIoStore((state)=>state["Home"]["Home_Flex9"]);
const Home_Flex9Cb = useHome_Flex9Cb()
const Home_Flex10Props = useStore((state)=>state["Home"]["Home_Flex10"]);
const Home_Flex10IoProps = useIoStore((state)=>state["Home"]["Home_Flex10"]);
const Home_Flex10Cb = useHome_Flex10Cb()
const Home_Flex7Props = useStore((state)=>state["Home"]["Home_Flex7"]);
const Home_Flex7IoProps = useIoStore((state)=>state["Home"]["Home_Flex7"]);
const Home_Flex7Cb = useHome_Flex7Cb()
const Home_Flex11Props = useStore((state)=>state["Home"]["Home_Flex11"]);
const Home_Flex11IoProps = useIoStore((state)=>state["Home"]["Home_Flex11"]);
const Home_Flex11Cb = useHome_Flex11Cb()
const Home_Flex12Props = useStore((state)=>state["Home"]["Home_Flex12"]);
const Home_Flex12IoProps = useIoStore((state)=>state["Home"]["Home_Flex12"]);
const Home_Flex12Cb = useHome_Flex12Cb()
const Home_Flex371Props = useStore((state)=>state["Home"]["Home_Flex371"]);
const Home_Flex371IoProps = useIoStore((state)=>state["Home"]["Home_Flex371"]);
const Home_Flex371Cb = useHome_Flex371Cb()
const Home_Flex373Props = useStore((state)=>state["Home"]["Home_Flex373"]);
const Home_Flex373IoProps = useIoStore((state)=>state["Home"]["Home_Flex373"]);
const Home_Flex373Cb = useHome_Flex373Cb()
const Home_Flex13Props = useStore((state)=>state["Home"]["Home_Flex13"]);
const Home_Flex13IoProps = useIoStore((state)=>state["Home"]["Home_Flex13"]);
const Home_Flex13Cb = useHome_Flex13Cb()
const Home_Flex25Props = useStore((state)=>state["Home"]["Home_Flex25"]);
const Home_Flex25IoProps = useIoStore((state)=>state["Home"]["Home_Flex25"]);
const Home_Flex25Cb = useHome_Flex25Cb()
const Home_Flex14Props = useStore((state)=>state["Home"]["Home_Flex14"]);
const Home_Flex14IoProps = useIoStore((state)=>state["Home"]["Home_Flex14"]);
const Home_Flex14Cb = useHome_Flex14Cb()
const Home_Flex365Props = useStore((state)=>state["Home"]["Home_Flex365"]);
const Home_Flex365IoProps = useIoStore((state)=>state["Home"]["Home_Flex365"]);
const Home_Flex365Cb = useHome_Flex365Cb()
const Home_Flex15Props = useStore((state)=>state["Home"]["Home_Flex15"]);
const Home_Flex15IoProps = useIoStore((state)=>state["Home"]["Home_Flex15"]);
const Home_Flex15Cb = useHome_Flex15Cb()
const Home_Flex366Props = useStore((state)=>state["Home"]["Home_Flex366"]);
const Home_Flex366IoProps = useIoStore((state)=>state["Home"]["Home_Flex366"]);
const Home_Flex366Cb = useHome_Flex366Cb()
const Home_Flex367Props = useStore((state)=>state["Home"]["Home_Flex367"]);
const Home_Flex367IoProps = useIoStore((state)=>state["Home"]["Home_Flex367"]);
const Home_Flex367Cb = useHome_Flex367Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex368Props = useStore((state)=>state["Home"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["Home"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Home_Flex26Props = useStore((state)=>state["Home"]["Home_Flex26"]);
const Home_Flex26IoProps = useIoStore((state)=>state["Home"]["Home_Flex26"]);
const Home_Flex26Cb = useHome_Flex26Cb()
const Home_Flex28Props = useStore((state)=>state["Home"]["Home_Flex28"]);
const Home_Flex28IoProps = useIoStore((state)=>state["Home"]["Home_Flex28"]);
const Home_Flex28Cb = useHome_Flex28Cb()
const Home_Flex37Props = useStore((state)=>state["Home"]["Home_Flex37"]);
const Home_Flex37IoProps = useIoStore((state)=>state["Home"]["Home_Flex37"]);
const Home_Flex37Cb = useHome_Flex37Cb()
const Home_Flex27Props = useStore((state)=>state["Home"]["Home_Flex27"]);
const Home_Flex27IoProps = useIoStore((state)=>state["Home"]["Home_Flex27"]);
const Home_Flex27Cb = useHome_Flex27Cb()
const Home_Flex29Props = useStore((state)=>state["Home"]["Home_Flex29"]);
const Home_Flex29IoProps = useIoStore((state)=>state["Home"]["Home_Flex29"]);
const Home_Flex29Cb = useHome_Flex29Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Home_Flex38Props = useStore((state)=>state["Home"]["Home_Flex38"]);
const Home_Flex38IoProps = useIoStore((state)=>state["Home"]["Home_Flex38"]);
const Home_Flex38Cb = useHome_Flex38Cb()
const Home_Flex39Props = useStore((state)=>state["Home"]["Home_Flex39"]);
const Home_Flex39IoProps = useIoStore((state)=>state["Home"]["Home_Flex39"]);
const Home_Flex39Cb = useHome_Flex39Cb()
const Home_Flex40Props = useStore((state)=>state["Home"]["Home_Flex40"]);
const Home_Flex40IoProps = useIoStore((state)=>state["Home"]["Home_Flex40"]);
const Home_Flex40Cb = useHome_Flex40Cb()
const Home_Flex297Props = useStore((state)=>state["Home"]["Home_Flex297"]);
const Home_Flex297IoProps = useIoStore((state)=>state["Home"]["Home_Flex297"]);
const Home_Flex297Cb = useHome_Flex297Cb()
const Product_card_1Props = useStore((state)=>state["Home"]["Product_card_1"]);
const Product_card_1IoProps = useIoStore((state)=>state["Home"]["Product_card_1"]);
const Product_card_1Cb = useProduct_card_1Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Product_card_2Props = useStore((state)=>state["Home"]["Product_card_2"]);
const Product_card_2IoProps = useIoStore((state)=>state["Home"]["Product_card_2"]);
const Product_card_2Cb = useProduct_card_2Cb()
const Flex5089Props = useStore((state)=>state["Home"]["Flex5089"]);
const Flex5089IoProps = useIoStore((state)=>state["Home"]["Flex5089"]);
const Flex5089Cb = useFlex5089Cb()
const Home_Flex298Props = useStore((state)=>state["Home"]["Home_Flex298"]);
const Home_Flex298IoProps = useIoStore((state)=>state["Home"]["Home_Flex298"]);
const Home_Flex298Cb = useHome_Flex298Cb()
const Product_card_4Props = useStore((state)=>state["Home"]["Product_card_4"]);
const Product_card_4IoProps = useIoStore((state)=>state["Home"]["Product_card_4"]);
const Product_card_4Cb = useProduct_card_4Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Product_card_3Props = useStore((state)=>state["Home"]["Product_card_3"]);
const Product_card_3IoProps = useIoStore((state)=>state["Home"]["Product_card_3"]);
const Product_card_3Cb = useProduct_card_3Cb()
const Flex57123Props = useStore((state)=>state["Home"]["Flex57123"]);
const Flex57123IoProps = useIoStore((state)=>state["Home"]["Flex57123"]);
const Flex57123Cb = useFlex57123Cb()
const Home_Flex58Props = useStore((state)=>state["Home"]["Home_Flex58"]);
const Home_Flex58IoProps = useIoStore((state)=>state["Home"]["Home_Flex58"]);
const Home_Flex58Cb = useHome_Flex58Cb()
const Home_Flex57Props = useStore((state)=>state["Home"]["Home_Flex57"]);
const Home_Flex57IoProps = useIoStore((state)=>state["Home"]["Home_Flex57"]);
const Home_Flex57Cb = useHome_Flex57Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Product_card_7Props = useStore((state)=>state["Home"]["Product_card_7"]);
const Product_card_7IoProps = useIoStore((state)=>state["Home"]["Product_card_7"]);
const Product_card_7Cb = useProduct_card_7Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Product_card_8Props = useStore((state)=>state["Home"]["Product_card_8"]);
const Product_card_8IoProps = useIoStore((state)=>state["Home"]["Product_card_8"]);
const Product_card_8Cb = useProduct_card_8Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Product_card_6Props = useStore((state)=>state["Home"]["Product_card_6"]);
const Product_card_6IoProps = useIoStore((state)=>state["Home"]["Product_card_6"]);
const Product_card_6Cb = useProduct_card_6Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Product_card_5Props = useStore((state)=>state["Home"]["Product_card_5"]);
const Product_card_5IoProps = useIoStore((state)=>state["Home"]["Product_card_5"]);
const Product_card_5Cb = useProduct_card_5Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Home_Flex59Props = useStore((state)=>state["Home"]["Home_Flex59"]);
const Home_Flex59IoProps = useIoStore((state)=>state["Home"]["Home_Flex59"]);
const Home_Flex59Cb = useHome_Flex59Cb()
const Home_Flex60Props = useStore((state)=>state["Home"]["Home_Flex60"]);
const Home_Flex60IoProps = useIoStore((state)=>state["Home"]["Home_Flex60"]);
const Home_Flex60Cb = useHome_Flex60Cb()
const Home_Flex62Props = useStore((state)=>state["Home"]["Home_Flex62"]);
const Home_Flex62IoProps = useIoStore((state)=>state["Home"]["Home_Flex62"]);
const Home_Flex62Cb = useHome_Flex62Cb()
const Home_Flex61Props = useStore((state)=>state["Home"]["Home_Flex61"]);
const Home_Flex61IoProps = useIoStore((state)=>state["Home"]["Home_Flex61"]);
const Home_Flex61Cb = useHome_Flex61Cb()
const Home_Flex63Props = useStore((state)=>state["Home"]["Home_Flex63"]);
const Home_Flex63IoProps = useIoStore((state)=>state["Home"]["Home_Flex63"]);
const Home_Flex63Cb = useHome_Flex63Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Home_Flex71Props = useStore((state)=>state["Home"]["Home_Flex71"]);
const Home_Flex71IoProps = useIoStore((state)=>state["Home"]["Home_Flex71"]);
const Home_Flex71Cb = useHome_Flex71Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Home_Flex90Props = useStore((state)=>state["Home"]["Home_Flex90"]);
const Home_Flex90IoProps = useIoStore((state)=>state["Home"]["Home_Flex90"]);
const Home_Flex90Cb = useHome_Flex90Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Home_Flex110Props = useStore((state)=>state["Home"]["Home_Flex110"]);
const Home_Flex110IoProps = useIoStore((state)=>state["Home"]["Home_Flex110"]);
const Home_Flex110Cb = useHome_Flex110Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Home_Flex117Props = useStore((state)=>state["Home"]["Home_Flex117"]);
const Home_Flex117IoProps = useIoStore((state)=>state["Home"]["Home_Flex117"]);
const Home_Flex117Cb = useHome_Flex117Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex147Props = useStore((state)=>state["Home"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Home"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image198Props = useStore((state)=>state["Home"]["Image198"]);
const Image198IoProps = useIoStore((state)=>state["Home"]["Image198"]);
const Image198Cb = useImage198Cb()
const Image197Props = useStore((state)=>state["Home"]["Image197"]);
const Image197IoProps = useIoStore((state)=>state["Home"]["Image197"]);
const Image197Cb = useImage197Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image195Props = useStore((state)=>state["Home"]["Image195"]);
const Image195IoProps = useIoStore((state)=>state["Home"]["Image195"]);
const Image195Cb = useImage195Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image196Props = useStore((state)=>state["Home"]["Image196"]);
const Image196IoProps = useIoStore((state)=>state["Home"]["Image196"]);
const Image196Cb = useImage196Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Image1634Props = useStore((state)=>state["Home"]["Image1634"]);
const Image1634IoProps = useIoStore((state)=>state["Home"]["Image1634"]);
const Image1634Cb = useImage1634Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image1834Props = useStore((state)=>state["Home"]["Image1834"]);
const Image1834IoProps = useIoStore((state)=>state["Home"]["Image1834"]);
const Image1834Cb = useImage1834Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image1734Props = useStore((state)=>state["Home"]["Image1734"]);
const Image1734IoProps = useIoStore((state)=>state["Home"]["Image1734"]);
const Image1734Cb = useImage1734Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Product_image_1Props = useStore((state)=>state["Home"]["Product_image_1"]);
const Product_image_1IoProps = useIoStore((state)=>state["Home"]["Product_image_1"]);
const Product_image_1Cb = useProduct_image_1Cb()
const Product_About_1Props = useStore((state)=>state["Home"]["Product_About_1"]);
const Product_About_1IoProps = useIoStore((state)=>state["Home"]["Product_About_1"]);
const Product_About_1Cb = useProduct_About_1Cb()
const Product_Name_1Props = useStore((state)=>state["Home"]["Product_Name_1"]);
const Product_Name_1IoProps = useIoStore((state)=>state["Home"]["Product_Name_1"]);
const Product_Name_1Cb = useProduct_Name_1Cb()
const Product_price_1Props = useStore((state)=>state["Home"]["Product_price_1"]);
const Product_price_1IoProps = useIoStore((state)=>state["Home"]["Product_price_1"]);
const Product_price_1Cb = useProduct_price_1Cb()
const Product_Name_2Props = useStore((state)=>state["Home"]["Product_Name_2"]);
const Product_Name_2IoProps = useIoStore((state)=>state["Home"]["Product_Name_2"]);
const Product_Name_2Cb = useProduct_Name_2Cb()
const Product_About_2Props = useStore((state)=>state["Home"]["Product_About_2"]);
const Product_About_2IoProps = useIoStore((state)=>state["Home"]["Product_About_2"]);
const Product_About_2Cb = useProduct_About_2Cb()
const Product_image_2Props = useStore((state)=>state["Home"]["Product_image_2"]);
const Product_image_2IoProps = useIoStore((state)=>state["Home"]["Product_image_2"]);
const Product_image_2Cb = useProduct_image_2Cb()
const Producr_price_2Props = useStore((state)=>state["Home"]["Producr_price_2"]);
const Producr_price_2IoProps = useIoStore((state)=>state["Home"]["Producr_price_2"]);
const Producr_price_2Cb = useProducr_price_2Cb()
const Product_image_4Props = useStore((state)=>state["Home"]["Product_image_4"]);
const Product_image_4IoProps = useIoStore((state)=>state["Home"]["Product_image_4"]);
const Product_image_4Cb = useProduct_image_4Cb()
const Product_About_4Props = useStore((state)=>state["Home"]["Product_About_4"]);
const Product_About_4IoProps = useIoStore((state)=>state["Home"]["Product_About_4"]);
const Product_About_4Cb = useProduct_About_4Cb()
const Product_Name_4Props = useStore((state)=>state["Home"]["Product_Name_4"]);
const Product_Name_4IoProps = useIoStore((state)=>state["Home"]["Product_Name_4"]);
const Product_Name_4Cb = useProduct_Name_4Cb()
const Product_price_4Props = useStore((state)=>state["Home"]["Product_price_4"]);
const Product_price_4IoProps = useIoStore((state)=>state["Home"]["Product_price_4"]);
const Product_price_4Cb = useProduct_price_4Cb()
const Product_Name_3Props = useStore((state)=>state["Home"]["Product_Name_3"]);
const Product_Name_3IoProps = useIoStore((state)=>state["Home"]["Product_Name_3"]);
const Product_Name_3Cb = useProduct_Name_3Cb()
const Product_About_3Props = useStore((state)=>state["Home"]["Product_About_3"]);
const Product_About_3IoProps = useIoStore((state)=>state["Home"]["Product_About_3"]);
const Product_About_3Cb = useProduct_About_3Cb()
const Product_image_3Props = useStore((state)=>state["Home"]["Product_image_3"]);
const Product_image_3IoProps = useIoStore((state)=>state["Home"]["Product_image_3"]);
const Product_image_3Cb = useProduct_image_3Cb()
const Product_price_3Props = useStore((state)=>state["Home"]["Product_price_3"]);
const Product_price_3IoProps = useIoStore((state)=>state["Home"]["Product_price_3"]);
const Product_price_3Cb = useProduct_price_3Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Product_image_7Props = useStore((state)=>state["Home"]["Product_image_7"]);
const Product_image_7IoProps = useIoStore((state)=>state["Home"]["Product_image_7"]);
const Product_image_7Cb = useProduct_image_7Cb()
const Product_About_7Props = useStore((state)=>state["Home"]["Product_About_7"]);
const Product_About_7IoProps = useIoStore((state)=>state["Home"]["Product_About_7"]);
const Product_About_7Cb = useProduct_About_7Cb()
const Product_Name_7Props = useStore((state)=>state["Home"]["Product_Name_7"]);
const Product_Name_7IoProps = useIoStore((state)=>state["Home"]["Product_Name_7"]);
const Product_Name_7Cb = useProduct_Name_7Cb()
const Product_price_7Props = useStore((state)=>state["Home"]["Product_price_7"]);
const Product_price_7IoProps = useIoStore((state)=>state["Home"]["Product_price_7"]);
const Product_price_7Cb = useProduct_price_7Cb()
const Product_Name_8Props = useStore((state)=>state["Home"]["Product_Name_8"]);
const Product_Name_8IoProps = useIoStore((state)=>state["Home"]["Product_Name_8"]);
const Product_Name_8Cb = useProduct_Name_8Cb()
const Product_About_8Props = useStore((state)=>state["Home"]["Product_About_8"]);
const Product_About_8IoProps = useIoStore((state)=>state["Home"]["Product_About_8"]);
const Product_About_8Cb = useProduct_About_8Cb()
const Product_image_8Props = useStore((state)=>state["Home"]["Product_image_8"]);
const Product_image_8IoProps = useIoStore((state)=>state["Home"]["Product_image_8"]);
const Product_image_8Cb = useProduct_image_8Cb()
const Product_price_8Props = useStore((state)=>state["Home"]["Product_price_8"]);
const Product_price_8IoProps = useIoStore((state)=>state["Home"]["Product_price_8"]);
const Product_price_8Cb = useProduct_price_8Cb()
const Product_image_6Props = useStore((state)=>state["Home"]["Product_image_6"]);
const Product_image_6IoProps = useIoStore((state)=>state["Home"]["Product_image_6"]);
const Product_image_6Cb = useProduct_image_6Cb()
const Product_About_6Props = useStore((state)=>state["Home"]["Product_About_6"]);
const Product_About_6IoProps = useIoStore((state)=>state["Home"]["Product_About_6"]);
const Product_About_6Cb = useProduct_About_6Cb()
const Product_Name_6Props = useStore((state)=>state["Home"]["Product_Name_6"]);
const Product_Name_6IoProps = useIoStore((state)=>state["Home"]["Product_Name_6"]);
const Product_Name_6Cb = useProduct_Name_6Cb()
const Product_price_6Props = useStore((state)=>state["Home"]["Product_price_6"]);
const Product_price_6IoProps = useIoStore((state)=>state["Home"]["Product_price_6"]);
const Product_price_6Cb = useProduct_price_6Cb()
const Product_Name_5Props = useStore((state)=>state["Home"]["Product_Name_5"]);
const Product_Name_5IoProps = useIoStore((state)=>state["Home"]["Product_Name_5"]);
const Product_Name_5Cb = useProduct_Name_5Cb()
const Product_About_5Props = useStore((state)=>state["Home"]["Product_About_5"]);
const Product_About_5IoProps = useIoStore((state)=>state["Home"]["Product_About_5"]);
const Product_About_5Cb = useProduct_About_5Cb()
const Product_image_5Props = useStore((state)=>state["Home"]["Product_image_5"]);
const Product_image_5IoProps = useIoStore((state)=>state["Home"]["Product_image_5"]);
const Product_image_5Cb = useProduct_image_5Cb()
const Product_price_5Props = useStore((state)=>state["Home"]["Product_price_5"]);
const Product_price_5IoProps = useIoStore((state)=>state["Home"]["Product_price_5"]);
const Product_price_5Cb = useProduct_price_5Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox7726Props = useStore((state)=>state["Home"]["TextBox7726"]);
const TextBox7726IoProps = useIoStore((state)=>state["Home"]["TextBox7726"]);
const TextBox7726Cb = useTextBox7726Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Input9Props = useStore((state)=>state["Home"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["Home"]["Input9"]);
const Input9Cb = useInput9Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()

  return (<>
  <Flex className="p-Home Home_Flex1 bpt" {...Home_Flex1Props} {...Home_Flex1Cb} {...Home_Flex1IoProps}>
<Flex className="p-Home Home_Flex2 bpt" {...Home_Flex2Props} {...Home_Flex2Cb} {...Home_Flex2IoProps}>
<Flex className="p-Home Home_Flex4 bpt" {...Home_Flex4Props} {...Home_Flex4Cb} {...Home_Flex4IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<Flex className="p-Home Home_Flex138 bpt" {...Home_Flex138Props} {...Home_Flex138Cb} {...Home_Flex138IoProps}>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex3 bpt" {...Home_Flex3Props} {...Home_Flex3Cb} {...Home_Flex3IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex5 bpt" {...Home_Flex5Props} {...Home_Flex5Cb} {...Home_Flex5IoProps}>
<Flex className="p-Home Home_Flex6 bpt" {...Home_Flex6Props} {...Home_Flex6Cb} {...Home_Flex6IoProps}>
<Flex className="p-Home Home_Flex10 bpt" {...Home_Flex10Props} {...Home_Flex10Cb} {...Home_Flex10IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Home_Flex8 bpt" {...Home_Flex8Props} {...Home_Flex8Cb} {...Home_Flex8IoProps}>
<Flex className="p-Home Home_Flex9 bpt" {...Home_Flex9Props} {...Home_Flex9Cb} {...Home_Flex9IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex7 bpt" {...Home_Flex7Props} {...Home_Flex7Cb} {...Home_Flex7IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex11 bpt" {...Home_Flex11Props} {...Home_Flex11Cb} {...Home_Flex11IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex className="p-Home Home_Flex12 bpt" {...Home_Flex12Props} {...Home_Flex12Cb} {...Home_Flex12IoProps}>
<Flex className="p-Home Home_Flex371 bpt" {...Home_Flex371Props} {...Home_Flex371Cb} {...Home_Flex371IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
<Flex className="p-Home Home_Flex373 bpt" {...Home_Flex373Props} {...Home_Flex373Cb} {...Home_Flex373IoProps}>
<Image className="p-Home Image198 bpt" {...Image198Props} {...Image198Cb} {...Image198IoProps}/>
<Image className="p-Home Image197 bpt" {...Image197Props} {...Image197Cb} {...Image197IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex13 bpt" {...Home_Flex13Props} {...Home_Flex13Cb} {...Home_Flex13IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex className="p-Home Home_Flex14 bpt" {...Home_Flex14Props} {...Home_Flex14Cb} {...Home_Flex14IoProps}>
<Flex className="p-Home Home_Flex365 bpt" {...Home_Flex365Props} {...Home_Flex365Cb} {...Home_Flex365IoProps}>
<Flex className="p-Home Home_Flex15 bpt" {...Home_Flex15Props} {...Home_Flex15Cb} {...Home_Flex15IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex className="p-Home Home_Flex366 bpt" {...Home_Flex366Props} {...Home_Flex366Cb} {...Home_Flex366IoProps}>
<Image className="p-Home Image195 bpt" {...Image195Props} {...Image195Cb} {...Image195IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex367 bpt" {...Home_Flex367Props} {...Home_Flex367Cb} {...Home_Flex367IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<Flex className="p-Home Flex368 bpt" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<Image className="p-Home Image196 bpt" {...Image196Props} {...Image196Cb} {...Image196IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex25 bpt" {...Home_Flex25Props} {...Home_Flex25Cb} {...Home_Flex25IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex26 bpt" {...Home_Flex26Props} {...Home_Flex26Cb} {...Home_Flex26IoProps}>
<Flex className="p-Home Home_Flex27 bpt" {...Home_Flex27Props} {...Home_Flex27Cb} {...Home_Flex27IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Flex className="p-Home Home_Flex29 bpt" {...Home_Flex29Props} {...Home_Flex29Cb} {...Home_Flex29IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image1634 bpt" {...Image1634Props} {...Image1634Cb} {...Image1634IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-Home Image1734 bpt" {...Image1734Props} {...Image1734Cb} {...Image1734IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image1834 bpt" {...Image1834Props} {...Image1834Cb} {...Image1834IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex28 bpt" {...Home_Flex28Props} {...Home_Flex28Cb} {...Home_Flex28IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<Flex className="p-Home Home_Flex37 bpt" {...Home_Flex37Props} {...Home_Flex37Cb} {...Home_Flex37IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex38 bpt" {...Home_Flex38Props} {...Home_Flex38Cb} {...Home_Flex38IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex className="p-Home Home_Flex39 bpt" {...Home_Flex39Props} {...Home_Flex39Cb} {...Home_Flex39IoProps}>
<Flex className="p-Home Home_Flex40 bpt" {...Home_Flex40Props} {...Home_Flex40Cb} {...Home_Flex40IoProps}>
<Flex className="p-Home Home_Flex297 bpt" {...Home_Flex297Props} {...Home_Flex297Cb} {...Home_Flex297IoProps}>
<Flex className="p-Home Product_card_1 bpt" {...Product_card_1Props} {...Product_card_1Cb} {...Product_card_1IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home Product_price_1 bpt" {...Product_price_1Props} {...Product_price_1Cb} {...Product_price_1IoProps}/>
</Flex>
<Image className="p-Home Product_image_1 bpt" {...Product_image_1Props} {...Product_image_1Cb} {...Product_image_1IoProps}/>
<TextBox className="p-Home Product_Name_1 bpt" {...Product_Name_1Props} {...Product_Name_1Cb} {...Product_Name_1IoProps}/>
<TextBox className="p-Home Product_About_1 bpt" {...Product_About_1Props} {...Product_About_1Cb} {...Product_About_1IoProps}/>
</Flex>
<Flex className="p-Home Product_card_2 bpt" {...Product_card_2Props} {...Product_card_2Cb} {...Product_card_2IoProps}>
<Flex className="p-Home Flex5089 bpt" {...Flex5089Props} {...Flex5089Cb} {...Flex5089IoProps}>
<TextBox className="p-Home Producr_price_2 bpt" {...Producr_price_2Props} {...Producr_price_2Cb} {...Producr_price_2IoProps}/>
</Flex>
<Image className="p-Home Product_image_2 bpt" {...Product_image_2Props} {...Product_image_2Cb} {...Product_image_2IoProps}/>
<TextBox className="p-Home Product_Name_2 bpt" {...Product_Name_2Props} {...Product_Name_2Cb} {...Product_Name_2IoProps}/>
<TextBox className="p-Home Product_About_2 bpt" {...Product_About_2Props} {...Product_About_2Cb} {...Product_About_2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex298 bpt" {...Home_Flex298Props} {...Home_Flex298Cb} {...Home_Flex298IoProps}>
<Flex className="p-Home Product_card_3 bpt" {...Product_card_3Props} {...Product_card_3Cb} {...Product_card_3IoProps}>
<Flex className="p-Home Flex57123 bpt" {...Flex57123Props} {...Flex57123Cb} {...Flex57123IoProps}>
<TextBox className="p-Home Product_price_3 bpt" {...Product_price_3Props} {...Product_price_3Cb} {...Product_price_3IoProps}/>
</Flex>
<Image className="p-Home Product_image_3 bpt" {...Product_image_3Props} {...Product_image_3Cb} {...Product_image_3IoProps}/>
<TextBox className="p-Home Product_Name_3 bpt" {...Product_Name_3Props} {...Product_Name_3Cb} {...Product_Name_3IoProps}/>
<TextBox className="p-Home Product_About_3 bpt" {...Product_About_3Props} {...Product_About_3Cb} {...Product_About_3IoProps}/>
</Flex>
<Flex className="p-Home Product_card_4 bpt" {...Product_card_4Props} {...Product_card_4Cb} {...Product_card_4IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home Product_price_4 bpt" {...Product_price_4Props} {...Product_price_4Cb} {...Product_price_4IoProps}/>
</Flex>
<Image className="p-Home Product_image_4 bpt" {...Product_image_4Props} {...Product_image_4Cb} {...Product_image_4IoProps}/>
<TextBox className="p-Home Product_Name_4 bpt" {...Product_Name_4Props} {...Product_Name_4Cb} {...Product_Name_4IoProps}/>
<TextBox className="p-Home Product_About_4 bpt" {...Product_About_4Props} {...Product_About_4Cb} {...Product_About_4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex57 bpt" {...Home_Flex57Props} {...Home_Flex57Cb} {...Home_Flex57IoProps}>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex className="p-Home Product_card_5 bpt" {...Product_card_5Props} {...Product_card_5Cb} {...Product_card_5IoProps}>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home Product_price_5 bpt" {...Product_price_5Props} {...Product_price_5Cb} {...Product_price_5IoProps}/>
</Flex>
<Image className="p-Home Product_image_5 bpt" {...Product_image_5Props} {...Product_image_5Cb} {...Product_image_5IoProps}/>
<TextBox className="p-Home Product_Name_5 bpt" {...Product_Name_5Props} {...Product_Name_5Cb} {...Product_Name_5IoProps}/>
<TextBox className="p-Home Product_About_5 bpt" {...Product_About_5Props} {...Product_About_5Cb} {...Product_About_5IoProps}/>
</Flex>
<Flex className="p-Home Product_card_6 bpt" {...Product_card_6Props} {...Product_card_6Cb} {...Product_card_6IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home Product_price_6 bpt" {...Product_price_6Props} {...Product_price_6Cb} {...Product_price_6IoProps}/>
</Flex>
<Image className="p-Home Product_image_6 bpt" {...Product_image_6Props} {...Product_image_6Cb} {...Product_image_6IoProps}/>
<TextBox className="p-Home Product_Name_6 bpt" {...Product_Name_6Props} {...Product_Name_6Cb} {...Product_Name_6IoProps}/>
<TextBox className="p-Home Product_About_6 bpt" {...Product_About_6Props} {...Product_About_6Cb} {...Product_About_6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex className="p-Home Product_card_7 bpt" {...Product_card_7Props} {...Product_card_7Cb} {...Product_card_7IoProps}>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox className="p-Home Product_price_7 bpt" {...Product_price_7Props} {...Product_price_7Cb} {...Product_price_7IoProps}/>
</Flex>
<Image className="p-Home Product_image_7 bpt" {...Product_image_7Props} {...Product_image_7Cb} {...Product_image_7IoProps}/>
<TextBox className="p-Home Product_Name_7 bpt" {...Product_Name_7Props} {...Product_Name_7Cb} {...Product_Name_7IoProps}/>
<TextBox className="p-Home Product_About_7 bpt" {...Product_About_7Props} {...Product_About_7Cb} {...Product_About_7IoProps}/>
</Flex>
<Flex className="p-Home Product_card_8 bpt" {...Product_card_8Props} {...Product_card_8Cb} {...Product_card_8IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home Product_price_8 bpt" {...Product_price_8Props} {...Product_price_8Cb} {...Product_price_8IoProps}/>
</Flex>
<Image className="p-Home Product_image_8 bpt" {...Product_image_8Props} {...Product_image_8Cb} {...Product_image_8IoProps}/>
<TextBox className="p-Home Product_Name_8 bpt" {...Product_Name_8Props} {...Product_Name_8Cb} {...Product_Name_8IoProps}/>
<TextBox className="p-Home Product_About_8 bpt" {...Product_About_8Props} {...Product_About_8Cb} {...Product_About_8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex58 bpt" {...Home_Flex58Props} {...Home_Flex58Cb} {...Home_Flex58IoProps}>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex59 bpt" {...Home_Flex59Props} {...Home_Flex59Cb} {...Home_Flex59IoProps}>
<Flex className="p-Home Home_Flex60 bpt" {...Home_Flex60Props} {...Home_Flex60Cb} {...Home_Flex60IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Flex className="p-Home Home_Flex62 bpt" {...Home_Flex62Props} {...Home_Flex62Cb} {...Home_Flex62IoProps}>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex61 bpt" {...Home_Flex61Props} {...Home_Flex61Cb} {...Home_Flex61IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex63 bpt" {...Home_Flex63Props} {...Home_Flex63Cb} {...Home_Flex63IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Flex>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox7726 bpt" {...TextBox7726Props} {...TextBox7726Cb} {...TextBox7726IoProps}/>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex71 bpt" {...Home_Flex71Props} {...Home_Flex71Cb} {...Home_Flex71IoProps}>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex90 bpt" {...Home_Flex90Props} {...Home_Flex90Cb} {...Home_Flex90IoProps}>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Input className="p-Home Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex110 bpt" {...Home_Flex110Props} {...Home_Flex110Cb} {...Home_Flex110IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Flex117 bpt" {...Home_Flex117Props} {...Home_Flex117Cb} {...Home_Flex117IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<Flex className="p-Home Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
