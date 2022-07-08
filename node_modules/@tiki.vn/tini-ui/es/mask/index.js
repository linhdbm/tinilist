import fmtEvent from '../_util/fmtEvent';
Component({
  props: {
    maskZindex: '',
    type: 'product',
    onMaskTap: function onMaskTap() {},
    show: true,
    fixMaskFull: false
  },
  methods: {
    onMaskClick: function onMaskClick(e) {
      var onMaskTap = this.props.onMaskTap;

      if (onMaskTap !== '' && typeof onMaskTap === 'function') {
        var event = fmtEvent(this.props, e);
        onMaskTap(event);
      }
    }
  }
});