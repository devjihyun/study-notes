import DefaultTheme from "vitepress/theme";
import MyBadge from "../components/MyBadge.vue";
import "./custom.css";
import { EnhanceAppContext } from "vitepress";

export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    // 기본 enhanceApp 유지
    DefaultTheme.enhanceApp?.(ctx);

    // 전역 컴포넌트 등록
    ctx.app.component("MyBadge", MyBadge);
  },
};
