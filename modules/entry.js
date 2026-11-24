import { base } from "room:a";

export const start = (room) => {
  const canvas = room.surface();
  const ctx = canvas.getContext("2d");
  room.text("入口が動きました（直した）。base は " + base);
  room.onFrame((time) => {
    const hue = Math.floor(time / 20) % 360;
    ctx.fillStyle = "hsl(" + hue + " 70% 50%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });
};
