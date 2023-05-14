import moment from "moment";
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

export const formatDate = (dateString) => {
  return moment(dateString).format("dddd, MMM D");
};

export const convertTo12Hour = (timeString) => {
  return moment(timeString, "HH:mm").format("hh:mm A");
};

export const convertTo24Hour = (timeString) => {
  return moment(timeString, "hh:mm A").format("HH:mm");
};
