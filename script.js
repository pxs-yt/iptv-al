const player = videojs('my-video', {
    autoplay: false, // Recommended to disable autoplay
    controls: true,
    sources: [
      { src: 'https://pxs-yt.github.io/iptv-al/IPTV+ALBANIA+VIP+{20,02,2024}.m3u8', type: 'application/x-mpegURL' },
    ],
  });
  