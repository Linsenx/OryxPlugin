import 'fetch-polyfill';

const Oryx = { };
const Oryx_API = {
  VISIT: 'oryx/visit'
};

/*
  [Oryx] 访问统计模块
  <div id="oryx_counter">
    <span>当前页面访问量:<span id="oryx_page_pv"></span></span>
    <span>当前页面访客量:<span id="oryx_page_uv"></span></span>
  </div>
*/ 
Oryx.Counter = class Counter {
  constructor({ url }) {
    if (url === undefined) {
      throw Error('url is required!');
    }
    this.url = url;
    this.label_pv = document.getElementById('oryx_page_pv');
    this.label_uv = document.getElementById('oryx_page_uv');
    this.refresh();
  }

  async refresh() {
    const res = await fetch(`${this.url}/${Oryx_API.VISIT}`).then(r => r.json());
    if (res.code === 200) {
      const { pv, uv } = res.data;
      if (this.label_pv !== null) this.label_pv.innerHTML = pv;
      if (this.label_uv !== null) this.label_uv.innerHTML = uv;
    }
  }
};

export default Oryx ;