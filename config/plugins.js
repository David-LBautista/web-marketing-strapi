module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIAQWBJRSB5GX2K5F2T",
        secretAccessKey: "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",
        region: "us-west-1",
        params: {
          Bucket: "strapi-david",
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
