"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: gracefully load assets from files inside build process
exports.beepSound = 
// tslint:disable-next-line:max-line-length
"data:audio/mp3;base64,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4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
exports.scanditLogoImage = 
// tslint:disable-next-line:max-line-length
"data:image/png;base64,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";
exports.laserActiveImage = 
// tslint:disable-next-line:max-line-length
"data:image/png;base64,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";
exports.laserPausedImage = 
// tslint:disable-next-line:max-line-length
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAYFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFTyNFUyNE9ws1UyNFUyNFUyNFTyNFCxM5UyNFHxc9RyNE5wcwd5ZO7AAAAH3RSTlMAZ35yAQgbBAwTI4lbRDmUoKtQLrc080osVZvhKMyyq5oARwAAB8JJREFUeNrtnYtS4koQhhUENRFRRBQRff+3PNP3nktCRHbPqTr9T5jErdrVrfr6t5PMdF9d/XndhEK/1H8T0dtQ6K/ol7FxAWIX+Veh0AVVoLaYEAojoP8C1btQ6O8KmBsPiSbwnvSfsHvPB4w7ucBhRyh0EQlROgw5/kKjwDNf4G6ke8yngrrkaYmDr+hIk35CoXPlOKJTAZxQSCHhiK9xV9aFdKN3BNNOJ5w7nTs60tR1PIdCZ2pp52VHXC3lBMh1SqEGBjHPvJe056gj6UsFt6HPdMAH5s9K73zQ9I6Tnlp6CYVqGSCf/hK4+pQTq6OJg4KQF+AVdzV2Yt2jjlDjP1ux2cLzFUZTj3A8hkLn6JXn1yEReRofSD0gT7wb7WLtjnVGHTkHpo3YbIxrBccKjlDoskKucLQiA+lPzAPw7O6OdoNdWGfUCXSBtxhyKnh+g5GEU0sbGqHQKb1tGJYBlFY854EgyL+8GO5CO8HOxm6sA+oIOsEsDBffqODYaZ+OfTpMD6HQWdrLKQ0T8JWFhqIJzAPviHuDdjV2ZZ1RB9ALjgXmzd7jDD/S/qFG+pqGnUKhn+iBJkUojToaLAwIe+Q94f5utJewo7Ej68nWkXTkfIov489AP5PTPA0+zfmY21eh0KgEE4GHh2DlwsFHAQAvuCvtYO0edjV29HVgnUh3/vxwPeLOAnGB8awcIrsKhXLNGY+5Xs95QqJ8PABzHn5kHnh3tDtrB9idsad7U2adSDeY9eCpsueZwV2r7+lInxme+15OoVCtmcwzZgYpqoOCsWP6EXjAHdw90Y53qWbtBjsbO7KebF1QL3Cm06yJdT9jlBXjNQ1/QvEpFCrUu6t+vc4B8rEAmOX0E6CKO3q7WbvBTlmMJOyJdUad4B6U0t0b3X2J8sdHOgo9PcGUBkyhEIphIELwYK1pAph8LHj6e3Z/wZ1p50SG8pgbn7KzsaccZg+oK+gDCcea4e6N7g+Hdv4feYYRCv1IT8/PRE4WExYEAr/aPvGutIu1Ux6T7lARdjV2TGI2zDom2y4d6UvTZr4rujOwv56/vvQj2tIIhTIxGIUSRIkeHwQV/Agj8Q7unmgvrL2GHZMY9nVCvfDrD8k8GGTgFnQUHY4H067SN4xv/IRCA9p9IyeAS6bDzthKpJG2RwqTFAxA/pp4v0bazdqHYSfWGfXCs51tM+nHLX5LZZ1x38kwzr9tootQqME5kQFnYl5QJ6CYdcOdgUfchfaUyoC1D8LedZTFJGNnX/eoU9b95HMTJn0rpAPqauye853EKYNunAfvoYx0vVJ3d/Z+8N5+VNq3Ge2QzaC1b+DxI+Qxbdg/4fZ0442dWLc7BYe6ZNyKumd9dyh8fWesh7OHTno7o54lM4ec92OWyhydtc+asN82nV1gtyTm+Snz9crYt01nrzj3pLfiOfQ/t/WdT9kbeXuGepbFHC1td87+yrDfD+bslsb0RcpON8HFvamzdkvZd2buyrsDPjtCoTx/cfeombET621nB9iJ9fWUnL28QeU71LU+hDHuFXez9/phzO7QeBKzC7xDU4DftY39MJTDoK9Lyi6wjz6NyZ6zu/dJ/Oq2krzcGnvOrnGhj9jtcvu1jSfuoS8/CIniYXv1tql6zN54zr5qP2fP36Bu9rJYYKbvlXgZV/0a1cVA/TRen+M82Q1uvEkNTXt7ys9F+Jax8Qb1w1bU9PIGdT72BvXU2pjB9bi6irGIgew3QGthDK16gGiIpTEhvzYGgfjQ1TFea8d2c21MP2VtzPCqx2LRY75GvV726NaEzZr+H2sdQ+csg2xxravF3YrfYtXjamDV4/B69odsb4Yuma83G7UX/orzZxexkj00bU27QqMI5dt/5oJ4vqB9bD37lJ1KugHK9gaWW/Aa2zlm/heBj4LYqRQa36k0L7ZoCNSzYqOS36pEG5XGdypN2YO69xtc29uqiyiY2xanYkfhtW0zDIXG9qEaN5JdtPZku53Y+/3pPagj1QVaVT2stMCD1hfgKgMaAdmmcPndEAqdridwnW13tu3PVYGBPeKt9QVcdYHHkeoCi2bdGKuB9DasRuWjfVYzBn4U/o3gym5w0YIoKRNqFYmRCyOmVF43hsopcbEkrJPUrhszXBFMC4LVFcHa4npKqywWaJKIeMvLPoVCw0XB+PxWFwdbYTmwt6o4nlQEex+oCCbWPlbr0RcqxWqTUgGyVebRRUUodPFqj4JYWfDxNav1WLBusOdVfJdVFd/091/k896q4Gs1VduFfF1J1KjoG5pUvZeReR2u4fviSvm6Mr6uii+zvrAqvpzHtOqzj8nXZu/qQu3D9dijPHvoRGn2F/XUkpbPrDC7VWdnyLVA+1B99qrzhnaPmdwehnsgVO0Lou9G6A904ei6svdG1XhDSF8M95nJeyqdbKR0r81tfI8buaBQuY+OSqFLNVVSsvyF76zkQB/oqZThzt3ysPHeYqRDnmtTZh3yrK0Zf+7sD0KhczvkOYQyohyM2jAvsbsY65ZX9UFd/KAP6p2c7vwVd6ksm1ZG787Q+V1P2X4BOYKNDfzOMETKF+N9UH/V4XpRNB1e6BdFM1b+hEKT+lkLLbd5P1+meZGBVzZX/0Fjdwf+dN3+pg98KPRDjbF49S/pJhT6tS5B4j8UFQCShr1YqAAAAABJRU5ErkJggg==";
exports.cameraImage = 
// tslint:disable-next-line:max-line-length
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xNyA1Yy0uOCAwLTEuNC41LTEuOCAxLS40LjUtLjcgMS0xLjEgMS41cy0uNiAxLS44IDEuM2wtLjMuM0gzYy0xLjYgMC0zIDEuNC0zIDN2MjdjMCAxLjYgMS40IDMgMyAzaDQ0YzEuNiAwIDMtMS40IDMtM3YtMjdjMC0xLjYtMS40LTMtMy0zSDM3bC0uMy0uM2MtLjItLjMtLjUtLjctLjgtMS4ycy0uNi0xLTEuMS0xLjVjLS40LS41LTEtMS0xLjgtMXptMCAyaDE2Yy0uMSAwIC4xIDAgLjMuM3MuNS44LjggMS4zLjcgMSAxLjEgMS41IDEgMSAxLjggMWgxMGMuNiAwIDEgLjQgMSAxdjI3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMXYtMjdjMC0uNi40LTEgMS0xaDEwYy44IDAgMS40LS41IDEuOC0xcy44LTEgMS4xLTEuNS42LTEgLjgtMS4yLjQtLjMuMy0uM3ptOCA0Yy03LjIgMC0xMyA1LjgtMTMgMTNzNS44IDEzIDEzIDEzIDEzLTUuOCAxMy0xMy01LjgtMTMtMTMtMTN6bTAgMmM2LjEgMCAxMSA0LjkgMTEgMTFzLTQuOSAxMS0xMSAxMS0xMS00LjktMTEtMTEgNC45LTExIDExLTExek04IDE0Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMnptMTcgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMmMzLjkgMCA3IDMuMSA3IDdzLTMuMSA3LTcgNy03LTMuMS03LTcgMy4xLTcgNy03eiIgY2xhc3M9ImEiLz48L3N2Zz4K";
exports.switchCameraImage = 
// tslint:disable-next-line:max-line-length
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg==";
exports.toggleTorchImage = 
// tslint:disable-next-line:max-line-length
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg==";
//# sourceMappingURL=base64assets.js.map