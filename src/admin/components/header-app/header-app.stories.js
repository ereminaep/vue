import headerApp from "./header-app.vue";

export default {
    title: "header-app",
    component: { headerApp },
};

export const defaultView = () => ({
    components: { headerApp },
    template: `
    <headerApp
      title="Панель администрирования" 
    >
    <h2>Контент</h2>
    </headerApp>
  `,
});