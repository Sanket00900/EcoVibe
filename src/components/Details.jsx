const Details = ({ title, imageUrl, description, content }) => {
  return (
    <div>
      <div class="bg-gradient-to-r from-blue-400 to-purple">
        <div class="max-w-3xl mx-auto py-8 px-4">
          <div class="text-center">
            <h1 class="text-4xl font-semibold text-white mb-4">{title}</h1>
            <img
              src={imageUrl}
              alt="Elegant Image"
              class="rounded-lg shadow-lg mx-auto mb-6"
            />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <p class="text-gray-600 mb-4">Description: {description}</p>
            <div class="prose">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
