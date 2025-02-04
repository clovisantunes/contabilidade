declare module "*.module.scss" {
  const classes: { [key: string]: string };
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.ico" {
  const icon: string;
  export default icon;
}
