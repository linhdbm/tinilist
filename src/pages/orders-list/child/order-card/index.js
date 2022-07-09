import { navigateTo } from '../../../../helper';
import { constants as c } from '../../../../constants';

Component({
  props: {
    status: 'LOADING',
  },
  data: {
    badges: {
      [c.DELIVERY]: {
        [c.PREPARING]: {
          content: 'Đang chuẩn bị',
          color: 'orange60',
          bg: 'orange10',
        },
        [c.DELIVERING]: {
          content: 'Đang giao hàng',
          color: 'brand',
          bg: 'blue10',
        },
        [c.DELIVERED]: {
          content: 'Đã giao',
          color: 'green60',
          bg: 'green10',
        },
        [c.FAIL]: {
          content: 'Giao hàng thất bại',
          color: 'red60',
          bg: 'red10',
        },
      },
      [c.STORE_PICKUP]: {
        [c.RECEIVED]: {
          content: 'Đã nhận đơn đặt',
          color: 'orange60',
          bg: 'orange10',
        },
        [c.COMPLETED]: {
          content: 'Đặt thành công',
          color: 'green60',
          bg: 'green10',
        },
        [c.READY]: {
          content: 'Sẵn sàng nhận hàng',
          color: 'brand',
          bg: 'blue10',
        },
      },
    },
  },
  didMount() {},
  methods: {
    onSelect() {
      navigateTo('order-detail', { id: this.props.order._id });
    },
  },
});
