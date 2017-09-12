import Common from './Common';

class LiveCall extends Common {
  static getInstallCode(brandCode) {
    return `
      <script>
        window.erxesSettings = {
          liveCall: {
            brand_id: "${brandCode}"
          },
        };
        ${LiveCall.installCodeIncludeScript('liveCall')}
      </script>
    `;
  }
}

export default LiveCall;
