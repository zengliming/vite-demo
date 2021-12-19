export default {
  computed: {
    device() {
      return (this as any).$store.state.app.device
    }
  },
  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    (this as any).fixBugIniOS()
  },
  methods: {
    fixBugIniOS() {
      const $subMenu = (this as any).$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e: any) => {
          if ((this as any).device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
