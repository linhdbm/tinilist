import { navigateTo } from '../../helper';

Page({
  data: {
    status: 'LOADING',
    headerType: 'DEFAULT'
  },
  async loadData() {
    try {
      this.setData({
        ...this.data,
        status: 'SUCCESS',
      });
    } catch (err) {
      this.setData({
        status: 'FAILURE',
      });
    }
  },
  async onLoad() {
    this.loadData();
  },
  onShow() {
    my.setCanPullDown({ canPullDown: false });
  },
  onPageScroll(e) {
    if (e.scrollTop === 0)
      this.setData({
        ...this.data,
        headerType: 'DEFAULT',
      });
    if (e.scrollTop >= 16)
      this.setData({
        ...this.data,
        headerType: 'SCROLLED',
      });
  },
  onMoveToProductList() {
    navigateTo('delivery', { method: "DELIVERY" });
  }
});
