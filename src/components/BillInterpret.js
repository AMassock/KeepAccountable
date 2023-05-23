import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const BillInterpretation = ({ billId }) => {
  const [interpretation, setInterpretation] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
  });

  // Initialize OpenAI API instance
  const openai = new OpenAIApi(configuration);

  // Function to fetch bill interpretation
  const fetchBillInterpretation = async (billId) => {
    // Construct the prompt for the ChatGPT model
    const prompt = `Interpret bill with ID ${billId}:`;

    // Define the parameters for the API call
    const params = {
      model: "gpt-3.5-turbo", // The model to use
      prompt, // The prompt text
      maxTokens: 50, // Maximum number of tokens to generate in the response
      temperature: 0.6, // Controls the randomness of the response
      n: 1, // Number of responses to generate
      stop: "\n", // Stop generating after a new line
    };

    try {
      // Send the request to OpenAI API
      const response = await openai.complete(params);

      // Extract the generated interpretation from the API response
      const generatedInterpretation = response.choices[0].text.trim();

      // Update the state with the generated interpretation
      setInterpretation(generatedInterpretation);
    } catch (error) {
      console.error("Error occurred during bill interpretation:", error);
    }
  };

  // Fetch the bill interpretation when the component mounts
  useEffect(() => {
    fetchBillInterpretation(billId);
  }, [billId]);

  return (
    <div>
      <h2>Bill Interpretation</h2>
      <p>{interpretation}</p>
    </div>
  );
};

export default BillInterpretation;
