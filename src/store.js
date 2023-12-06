import { reactive } from "vue";

export const store = reactive({
    header: [ "Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    footer: [
        {
            title: "Address",
            info: ["382 NE 191st St # 87394 Miami,FL 33179-3899", "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)", "support@maxcoach.com"]
        },
        {
            title: "Explore",
            info: ["Start here", "Blog", "About us"]
        },
        {
            title: "",
            info: ["Success story", "Courses", "Contact us"],
        },
        {
            title: "Information",
            info: ["Membership", "Purchase guide", "Privacy policy", "Terms of service"],
        },
    ]
  });