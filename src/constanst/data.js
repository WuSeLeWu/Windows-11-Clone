import {
  chromeIcon,
  vsCodeIcon,
  wifiIcon,
  voiceMuteIcon,
  chargingIcon,
  wordIcon,
  excelIcon,
  powerPointIcon,
  notepadIcon,
  vs2022Icon,
  folderIcon,
  rarIcon,
  imgFileIcon,
  pcIcon,
  explorerFileIcon,
  recycleBinIcon,
} from "./icons";

export const startApps = [
  {
    id: 1,
    icon: wordIcon,
    text: "Word",
    filter: "1",
    date: "",
  },
  {
    id: 2,
    icon: excelIcon,
    text: "Excel",
    filter: "1",
    date: "",
  },
  {
    id: 3,
    icon: powerPointIcon,
    text: "PowerPoint",
    filter: "1",
    date: "",
  },
  {
    id: 4,
    icon: notepadIcon,
    text: "Notepad",
    filter: "1",
    date: "",
  },
  {
    id: 5,
    icon: vsCodeIcon,
    text: "VS Code",
    filter: "1",
    date: "",
  },
  {
    id: 6,
    icon: vs2022Icon,
    text: "Visual Studio 2022",
    filter: "1",
    date: "",
  },
  {
    id: 7,
    icon: folderIcon,
    text: "Folder",
    filter: "1",
    date: "",
  },
  {
    id: 8,
    icon: chromeIcon,
    text: "Axaf1215abdw.svg",
    filter: "2",
    date: "14m ago",
  },
  {
    id: 9,
    icon: imgFileIcon,
    text: "Screenshot 2099.01.01",
    filter: "2",
    date: "1h ago",
  },
  {
    id: 10,
    icon: imgFileIcon,
    text: "Screenshot 2099.01.03",
    filter: "2",
    date: "2h ago",
  },
  {
    id: 11,
    icon: rarIcon,
    text: "Windows-11-Clone.zip",
    filter: "2",
    date: "14h ago",
  },
  {
    id: 12,
    icon: imgFileIcon,
    text: "Cdlryxvyt.png",
    filter: "2",
    date: "22h ago",
  },
];

export const windowApps = [
  {
    id: 1,
    icon: pcIcon,
    name: "This PC",
    initialX: 15,
    initialY: 15,
  },
  {
    id: 2,
    icon: explorerFileIcon,
    name: "File Explorer",
    initialX: 15,
    initialY: 90,
  },
  {
    id: 3,
    icon: notepadIcon,
    name: "Notepad",
    initialX: 15,
    initialY: 180,
  },
  {
    id: 4,
    icon: recycleBinIcon,
    name: "Recycle Bin",
    initialX: 15,
    initialY: 260,
  },
];

export const centerTaskbarApps = [chromeIcon, vsCodeIcon];
export const rightTaskbarApps = [wifiIcon, voiceMuteIcon, chargingIcon];
