import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html", host: "localhost" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Fusion Lab portal", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Smart Sensor Fusion Laboratory/);
  assert.match(html, /智慧信息融合实验室/);
  assert.match(html, /FusionWeb/);
  assert.match(html, /3DAnno/);
  assert.match(html, /SJTU SMART SENSOR FUSION LAB · ALL RIGHTS RESERVED/);
  assert.match(html, /logo-sjtu\.png/);
  assert.match(html, /logo-fusion-v2\.png/);
  assert.doesNotMatch(html, /上海交通大学智慧信息融合实验室依托自动化与感知学院筹建/);
  assert.doesNotMatch(html, /class="domain"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("ships the local visual assets", async () => {
  await Promise.all([
    access(new URL("../public/bg-hero.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/logo-sjtu.png", import.meta.url)),
    access(new URL("../public/logo-fusion.png", import.meta.url)),
    access(new URL("../public/logo-fusion-v2.png", import.meta.url)),
  ]);
});
