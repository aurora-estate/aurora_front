
import { populate } from "dotenv";
import qs from "qs";

// import {useStore} from "@/store";

export class API {
  config = useRuntimeConfig().public.apiBaseURL + "/api";

  constructor() {}

  async fetchData(endpoint, params = "") {
    console.log("fetchData ", `${this.config}${endpoint}?${params}`);
    return await $fetch(`${this.config}${endpoint}?${params}`, {
      method: "GET",
      server: false,
    }); 
  }

  async postData(endpoint, params = null) {
    return await $fetch(`${this.config}${endpoint}`, {
      method: "POST",
      body: JSON.stringify({
        data: params,
      }),
    });
  }

  async getHeader() {
    const params = qs.stringify({
      fields: ['id'],
      populate: {
        White: {
          fields: ['formats','url']
        },
        Black: {
          fields: ['formats','url']
        }
      },
      
    });
    return this.fetchData(`/logo`, params);
  }
  async getMain() {
    const params = qs.stringify({
      fields: ['Main_title'],
      populate: {
        Header_link:{
          populate: {
            Icon: true
          }
        },
        Header_post:true,
        Main_bg: {
          populate: {
            Main_background: {
              fields: ['url', 'formats', 'width', 'height', 'alternativeText']
            }
          }
        }
      }
    });
    return this.fetchData(`/section-main`, params);
  }
  async getOrder() {
    const params = qs.stringify({
      fields: ['Desc'],
      populate: {
        City:true,
        Service_type:true,
        Object_category: true
      }
    });
    return this.fetchData(`/order-config`, params);
  }
  async getAbout() {
    const params = qs.stringify({
      fields: ['Desc'],
      populate: {
        Slider:{
          fields: ['formats','url']
        },
     
      }
    });
    return this.fetchData(`/section-about`, params);
  }
  async getYour() {
    const params = qs.stringify({
      fields: ['Desc'],
      populate : {
        blocks_yours : {
          fields : ['Title','Desc','Type','Color','visibleMobile'],
          populate: {
            Main_img: {
              fields: ['formats','url']
            },
            
          }
        }
      }
    });
    return this.fetchData(`/section-your`, params);
  }
  async getSeoData() {
    const params = qs.stringify({
      fields: ['metaTitle', 'metaDescription', 'metaKeywords', 'customMetaTags'],
    })
    return this.fetchData('/page-seo', params)
  }
  async getConfig() {
    const params = qs.stringify();
    return this.fetchData(`/section-your`, params);
  }
}
