import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-management';
  opened=false;
  constructor(){
    let data=[
      {
        name:"Samsung Galaxy M33 5G ",
        brand:"Samsung",
        img:"assets/samsung-M33.png",
        stockAvail:true,
        location:"Pune",
        desc:"Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience 16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5 Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera Massive 6000 mAh Battery | Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD Latest Android v12.0, One UI 4 operating system."
      },
      {
        name:"Itel P40 Luxurious Gold",
        brand:"Itel",
        img:"/assets/itel-p40.png", stockAvail:true,
        location:"Pune",
        desc:"6000mAh Mega Battery | Up to 56 days Long Standby, 31 Hours Calling & 203 Hours Music Playback Time | AI Battery Lab to Ensure Safe Charging 6.6 inch HD+ Dot Notch IPS display with 90% screen to body ratio | 120Hz Touch Sampling Rate | IPX2 Water Resistant 2GB RAM + 64GB ROM | Up to 4GB RAM with Memory Fusion | Expandable up to 128GB with dedicated SD Card Slot / Dual SIM (nano+nano) 13MP AI Dual CAM, Extra Large Double Lens | f/1.85 Large Aperture for Sharper and More Realistic Details 8.7mm Ultra Slim Body | 3D Track Touch and Square Fashion Design | One Time Screen Replacement within 100 Days"
      },
      {
        name:"Samsung Galaxy M14 5G",
        brand:"Samsung",
        img:"/assets/amsung-M14.png", stockAvail:true,location:"Pune",
        desc:"16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color 50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP (F2.0) front camera Superfast 5G with 13 5G Bands, Powerful Exynos 1330 Octa Core 2.4GH 5nm processor with Letest Android 13,One UI Core 5.0, 6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Get up to 2 times of Android Updates & 4 times of Security Updates with Samsung Galaxy M14 5G."
      },   {
        name:"Redmi A1 ",
        brand:"Redmi",
        img:"/assets/redmi-A1.png", stockAvail:true,location:"Pune",
        desc:"Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger"
      },   {
        name:"realme narzo N55", stockAvail:true,location:"Pune",
        brand:"realme",
        img:"/assets/realme-narzo-N55.png",
        desc:"* With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery from 0-50% in just 29 minutes, making your life super convenient and stress free. * Super High-res 64MP primary AI camera allows you to shoot crisp and clear shots in any scenario with incredible detail. The flagship grade ProLight Imaging technology brings segment leading low light performance to the N55. * Enjoy up to 12GB of Dynamic RAM made up from up to 6GB of onboard RAM and up to an additional 6GB of Dynamic RAM for next level multi tasking. * Large 6.72” Full screen display on the narzo N55 provides a segment leading display with a centre punch hole display, 90Hz ultra smooth refresh rate, 680nits of peak brightness, and 91.4% screen-to-Body ratio. * Flagship grade premium two tone design makes the N55 stand out from the crowd. The 7.89mm thin beauty feels easy to hold and light weight to carry around easily."
      },   {
        name:"OnePlus Nord CE 2 Lite 5G",
        brand:"OnePlus",
        img:"/assets/OnePlus-Lite-5G.png",stockAvail:false,location:"Chennai",
        desc:"Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471 Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9 Display Features: Dark mode Operating System: Oxygen OS based on Android 12 Processor: Qualcomm Snapdragon 695 5G Battery & Charging: 5000 mAh with 33W SuperVOOC"
      },   {
        name:"OnePlus Nord CE 3 Lite 5G",stockAvail:false,location:"Chennai",
        brand:"OnePlus",
        img:"/assets/OnePlus-Nord-CE-3-Lite.png",
        desc:"Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Rear Camera Mode: Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080×2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM) Operating System: Oxygen OS based on Android 13.1 Processor: Qualcomm Snapdragon 695 5G Battery & Charging: 5000 mAh with 67W SUPERVOOC Endurance Edition"
      },
      {
        name:"Redmi Note 12 5G Mystique Blue",stockAvail:true,location:"Chennai",
        brand:"Redmi",
        img:"/assets/Redmi-12-5G-Mystique-Blue.png",
        desc:"Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity Memory, Storage & SIM: 4GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
      },
      {
        name:"Itel m80 Luxurious Gold",stockAvail:true,location:"Chennai",
        brand:"Itel",
        img:"/assets/itel-p40.png",
        desc:"6000mAh Mega Battery | Up to 56 days Long Standby, 31 Hours Calling & 203 Hours Music Playback Time | AI Battery Lab to Ensure Safe Charging 6.6 inch HD+ Dot Notch IPS display with 90% screen to body ratio | 120Hz Touch Sampling Rate | IPX2 Water Resistant 2GB RAM + 64GB ROM | Up to 4GB RAM with Memory Fusion | Expandable up to 128GB with dedicated SD Card Slot / Dual SIM (nano+nano) 13MP AI Dual CAM, Extra Large Double Lens | f/1.85 Large Aperture for Sharper and More Realistic Details 8.7mm Ultra Slim Body | 3D Track Touch and Square Fashion Design | One Time Screen Replacement within 100 Days"
      }
    ]
    localStorage.setItem("productList",JSON.stringify(data))
    localStorage.setItem("trashList","")

    console.log("kfajfajfdjfhfjhadfkjfhkadjhfajkdhk");
    
  }
  ngOnInit(){
  
  }
}
