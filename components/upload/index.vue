<template>
  <div ref="container" class="upload">
    <div ref="button" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script>
import { getOSSSign } from '@/services/captcha'
import { hideLoading, showLoading, showToast } from '@/plugins/utils'
import { Uploader } from 'plupload'

// 1: 'avatar', // 个人中心-头像 th_100
// 2: 'bgpic', // 个人中心-背景 th_460
// 3: 'case', // 作品 th_750
// 4: 'grant', // 授权主图 th_750
// 5: 'lot', // 关注抽奖/谷子抽奖/无料众筹 th_690_400
// 6: 'lotprize', // 奖品主图 th_470_365
// 7: 'shop_cover', // 店铺背景 th_750_280

export default {
  name: 'Upload',
  props: {
    type: {
      type: String,
      required: true,
      validator: value => {
        const types = ['avatar', 'bgpic', 'case', 'grant', 'lot', 'lotprize', 'shop_cover']
        return types.includes(value)
      },
    },
  },
  mounted() {
    // 参考文档：https://chaping.github.io/plupload/doc/
    const uploader = new Uploader({
      browse_button: this.$refs.button,
      multi_selection: false,
      filters: {
        mime_types: [{ title: 'Image files', extensions: 'image/*,jpg,jpeg,png,gif' }],
        max_file_size: '5mb', // 最大只能上传5mb的文件
        prevent_duplicates: true, // 不允许选取重复文件
      },
    })
    uploader.init()
    uploader.bind('FilesAdded', this.onAdded, this)
    uploader.bind('UploadFile', this.onUpload, this)
    uploader.bind('FileUploaded', (_, __, { status, response }) => {
      if (status !== 200) return
      this.onSuccess(response)
    })
    uploader.bind('Error', (_, { code, message }) => {
      this.onError(String(code), message)
    })
  },
  methods: {
    async onAdded(uploader, files) {
      const sign = await getOSSSign(this.type)
      // 获取后缀
      const { name } = files[0]
      const idx = name.lastIndexOf('.')
      const suffix = name.substring(idx).toLocaleLowerCase()
      // 更新选项
      uploader.setOption({
        url: sign.host,
        multipart_params: {
          key: sign.dir + suffix,
          policy: sign.policy,
          OSSAccessKeyId: sign.accessid,
          success_action_status: '200',
          callback: sign.callback,
          signature: sign.signature,
        },
      })
      // 开始上传
      uploader.start()
    },
    onUpload() {
      showLoading('上传图片中，请稍等哦')
    },
    onSuccess(response) {
      try {
        hideLoading()
        this.$emit('success', JSON.parse(response))
      } catch (e) {
        showToast('上传失败，请重新上传')
      }
    },
    onError(code, message) {
      const TITLE_MAP = {
        '-600': '请选择50K～5M内大小的图片',
        '-601': '上传图片类型错误，仅支持heic,jpg和png',
        '-602': '上传图片存在重复',
      }
      showToast(TITLE_MAP[code] || message)
    },
  },
}
</script>
<style lang="scss" scoped>
.upload {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 100;
}
</style>
