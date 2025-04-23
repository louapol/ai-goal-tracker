export const getSmartTasks = async (goalSummary: string) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a motivational coach that helps break down personal goals into actionable daily tasks." },
        { role: "user", content: `Here’s the goal: ${goalSummary}. What should I do today?` }
      ]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
};
