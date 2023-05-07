export const sortEvents = (data) => {
  let sortedData = Object.values(data).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
  return sortedData;
};

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
  const filtered = Object.values(events).filter((event) => {
    let match = true;
    for (let i = 0; i < filterBy.length; i++) {
      if (filterBy[i] === criteria[filterBy[i]].toLowerCase()) continue;
      if (filterBy[i] === "topic") {
        if (!event.topics[criteria["topic"]]) match = false;
      } else if (event[filterBy[i]] !== criteria[filterBy[i]]) match = false;
    }
    return match;
  });
  return filtered;
};

export const extractTopics = (data) => {
  let uniqueTopics = [];
  Object.values(data).forEach((event) => {
    Object.keys(event.topics).forEach((topic) => {
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
  Object.values(data).forEach((event) => {
    const index = unique.findIndex(
      (uniqueItem) => uniqueItem === event[toExtract]
    );
    if (index === -1) unique.push(event[toExtract]);
  });
  return unique;
};
