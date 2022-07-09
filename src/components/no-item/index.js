Component({
  props: {
    top: 0, // height of the obj before it in the page
    type: 'order',
    showButton: true,
    onSelect() {},
  },
  data: {
    image: {
      order: '/assets/no_order.png',
      search: '/assets/no_result.png',
    },
    title: {
      order: 'Bạn không có đơn đặt hàng',
      search: 'Xin lỗi, chúng tôi gần như tìm thấy nó!',
    },
    subTitle: {
      order: 'Hay là bạn muốn đặt thử một đơn hàng?',
      search: 'Vui lòng thử lại, chúc bạn may mắn',
    },
    btnContent: {
      order: 'Đặt ngay!',
    },
  },
  methods: {
    onSelect() {
      this.props.onSelect();
    },
  },
});
