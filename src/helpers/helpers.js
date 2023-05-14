export const groupByDay = (sortedData) => {
  let groupedData = [];
  sortedData.forEach((item) => {
    const index = groupedData.findIndex((group) => group.date === item.date);
    if (index === -1) {
      groupedData.push({ date: item.date, data: [item] });
    } else {
      groupedData[index].data.push(item);
    }
  });
  return groupedData;
};

export const filterEvents = (events, criteria) => {
  const filterBy = Object.keys(criteria);
  const filtered = events.filter((event) => {
    let match = true;
    for (let i = 0; i < filterBy.length; i++) {
      if (filterBy[i] === criteria[filterBy[i]].toLowerCase()) continue;
      if (filterBy[i] === "topic") {
        const index = event.topics.findIndex(
          (topic) => topic === criteria["topic"]
        );
        if (index === -1) match = false;
      } else if (event[filterBy[i]] !== criteria[filterBy[i]]) match = false;
    }
    return match;
  });
  return filtered;
};

export const extractTopics = (data) => {
  let uniqueTopics = [];
  data.forEach((event) => {
    event.topics.forEach((topic) => {
      const index = uniqueTopics.findIndex(
        (uniqueTopic) => uniqueTopic === topic
      );
      if (index === -1) uniqueTopics.push(topic);
    });
  });
  return uniqueTopics;
};

export const extract = (data, toExtract) => {
  let unique = [];
  data.forEach((event) => {
    const index = unique.findIndex(
      (uniqueItem) => uniqueItem === event[toExtract]
    );
    if (index === -1) unique.push(event[toExtract]);
  });
  return unique;
};

export const convertTo24Hour = (time) => {
  const [timeStr, period] = time.split(" ");
  let [hours, minutes] = timeStr.split(":");
  if (period === "PM" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  } else if (period === "AM" && hours === "12") {
    hours = "00";
  }
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

export const convertTo12Hour = (time) => {
  const timeString12hr = new Date(
    "2023-05-22T" + time + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return timeString12hr;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};
