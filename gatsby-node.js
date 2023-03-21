const { createRemoteFileNode } = require("gatsby-source-filesystem")

const galleryImages = require("./src/components/home/images/images.json")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const NODE_TYPE = "galleryImage"
  galleryImages.forEach((image, index) => {
    createNode({
      id: createNodeId(`${NODE_TYPE}-${index}`),
      imgData: {
        id: image,
        imgUrl: `https://web.nitp.ac.in/gallery/images/${image}`,
      },
      featuredImage: null,
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(image),
        contentDigest: createContentDigest(image),
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type galleryImage implements Node {
      imgData: galleryImageData
      featuredImg: File @link(from: "fields.localImage")
    }

    type galleryImageData {
      id: String
      imgUrl: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "galleryImage" && node.imgData.imgUrl !== null) {
    const fileNode = await createRemoteFileNode({
      url: node.imgData.imgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    })

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localImage", value: fileNode.id })
    }
  }
}
