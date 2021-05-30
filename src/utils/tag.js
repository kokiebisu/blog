export const generateTagColor = title => {
  // const colors = {
  //   Web: "#CB48B7",
  //   コンセプト: "#2E2D4D",
  //   環境: "#337357",
  //   Javascript: "#6D9F71",
  //   HowTo: "#E4E3D3",
  //   NodeJS: "#F5CB5C",
  //   "Third Party": "#FACFAD",
  //   "Visual Studio": "#F5AC72",
  //   セットアップ: "#1B5299",
  //   Github: "#9FC2CC",
  //   Netlify: "#1B5299",
  //   Array: "#FF579F",
  // }
  const colors = {
    Web: "blue-200",
    コンセプト: "blue-400",
    環境: "blue-600",
    Javascript: "blue-800",
    HowTo: "green-200",
    NodeJS: "green-400",
    "Third Party": "red-600",
    "Visual Studio": "red-800",
    Github: "indigo-200",
    Netlify: "indigo-400",
    Array: "indigo-600",
    オブジェクト: "indigo-800",
    デプロイ: "purple-200",
    セットアップ: "purple-400",
  }
  return colors[title]
}
