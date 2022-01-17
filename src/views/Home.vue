<template>
  <div>
    <textarea
      name=""
      id=""
      cols="30"
      rows="6"
      v-model="content"
    />
    <div class="bgfonticon" :style="show?'transform:scale(1);':'transform:scale(0);'">
        <div>每次录音最长为 <span style="color:#fd9a4d;">1:00</span></div>
        <div style="margin-bottom:2.7rem;margin-top:0.2rem;">还可继续录制 <span style="color:#fd9a4d;font-weight:700">{{daojishi}}</span> 秒</div>
      </div>
    <button @click="recOpen">开始</button>
    <button @click="recStop">停止</button>
    <audio :src="audiosrc" controls></audio>
  </div>
</template>

<script>
import { IatRecorder } from "./IatRecorder/IatRecorder.js";
export default {
  data() {
    return {
      content: "",
      iatRecorder: "",
      top:0,
      show:false,
      daojishi:60,
      audiobase64:[],
      tempcontent1:'',
      tempcontent:'',
      audiosrc:'',
    };
  },
  mounted() {},
  methods: {
    recStop() {
      this.active = false;
      this.iatRecorder.stop();
      if (this.iatRecorder.audiobase64.length == 0) {
        return;
      }
      this.audiobase64 = this.iatRecorder.audiobase64;
      console.log(this.audiobase64);
      let alldata = this.mergeArray(this.iatRecorder.audiobase64);
      let wavBuffer = this.createWavFile(alldata);
      let audiosrc = new Blob([new Uint8Array(wavBuffer)],{type:'auido/mp3'});
      this.audiosrc = window.URL.createObjectURL(audiosrc)
      console.log(audiosrc);
    },
    recOpen() {
      this.active = true;
      this.iatRecorder = new IatRecorder({ audiobase64: this.audiobase64 });
      this.iatRecorder.onTextChange = this.onTextChange;
      this.iatRecorder.onWillStatusChange = this.onWillStatusChange;
      this.iatRecorder.start();
    },
    onTextChange(text, type) {
      if (type != 1) {
        this.content = this.tempcontent + text;
        this.tempcontent1 = text;
      }
      if (this.Interval) {
        clearTimeout(this.Interval);
      }
      if (this.iatRecorder.status == "end") {
        this.Interval = setTimeout(() => {
          this.tempcontent += this.tempcontent1;
        }, 800);
      }
    },
    onWillStatusChange(oldStatus, status) {
      // let text = {
      //   null: '开始识别', // 最开始状态
      //   init: '开始识别', // 初始化状态
      //   ing: '结束识别', // 正在录音状态
      //   end: '开始识别', // 结束状态
      // }
      console.log(oldStatus, status);
      if (status === "ing") {
        this.show = true;
        let self = this;
        this.dingshiqi = setInterval(function () {
          self.daojishi = self.daojishi - 1;
          if (self.daojishi == 0 || self.active == false) {
            self.recStop();
            clearInterval(self.dingshiqi);
          }
        }, 1000);
      } else if (status === "init") {
        this.daojishi = 60;
      } else {
        clearInterval(this.dingshiqi);
      }
      if (status == "end") {
        this.show = false;
        clearInterval(this.dingshiqi);
        this.onTextChange(this.content, 1);
      }
    },
    mergeArray(list) {
      const length = list.length * list[0].length;
      const data = new Float32Array(length);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        data.set(list[i], offset);
        offset += list[i].length;
      }
      return data;
    },
    createWavFile(audioData) {
      const WAV_HEAD_SIZE = 44;
      let buffer = new ArrayBuffer(audioData.length * 2 + WAV_HEAD_SIZE),
        // 需要用一个view来操控buffer
        view = new DataView(buffer);
      // 写入wav头部信息
      // RIFF chunk descriptor/identifier
      this.writeUTFBytes(view, 0, "RIFF");
      // RIFF chunk length
      view.setUint32(4, 44 + audioData.length * 2, true);
      // RIFF type
      this.writeUTFBytes(view, 8, "WAVE");
      // format chunk identifier
      // FMT sub-chunk
      this.writeUTFBytes(view, 12, "fmt ");
      // format chunk length
      view.setUint32(16, 16, true);
      // sample format (raw)
      view.setUint16(20, 1, true);
      // stereo (2 channels)
      view.setUint16(22, 2, true);
      // sample rate
      view.setUint32(24, 44100, true);
      // byte rate (sample rate * block align)
      view.setUint32(28, 44100 * 2, true);
      // block align (channel count * bytes per sample)
      view.setUint16(32, 2 * 2, true);
      // bits per sample
      view.setUint16(34, 16, true);
      // data sub-chunk
      // data chunk identifier
      this.writeUTFBytes(view, 36, "data");
      // data chunk length
      view.setUint32(40, audioData.length * 2, true);
      let length = audioData.length;
      let index = 44;
      for (let i = 0; i < length; i++) {
        // view.setInt16(index, audioData[i] * (0x7FFF * volume), true);
        var s = Math.max(-1, Math.min(1, audioData[i]));
        view.setInt16(index, s < 0 ? s * 0x8000 : s * 0x7fff, true);
        index += 2;
      }
      return buffer;
    },
    writeUTFBytes(view, offset, string) {
      var lng = string.length;
      for (var i = 0; i < lng; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    },
  },
};
</script>

<style>
</style>
