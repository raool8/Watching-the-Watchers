# Homework2

## What is a tag? 
A tag is a snippet of code that is placed on a web page that collects data about how a user interacts with your site. Tealium iQ and Google Tag Manager (GTM) use the term “tags,” and Adobe Launch uses the term “extensions.” 

## What are triggers? 
Triggers are what tell a tag when it should fire or in other words, when the code should be added to a page. Triggers use user-defined conditions, such as when a URL contains a certain path, to know when to add a tag. Google Tag Manager uses term “trigger,” and Tealium iQ and Adobe Launch uses term “load rule” and “rule” respectively.

## What is a datalayer? 
The data layer is unique because it is the only part of the tag management system that lives outside of the TMS. A data layer is a collection of data that lives in the code of the webpage. Some examples of data found in a data layer are page name, product ID, and user ID.

## [What is Personally Identifiable Information (PII)?](https://www.investopedia.com/terms/p/personally-identifiable-information-pii.asp) [Is it usable for marketing?](https://piwik.pro/blog/pii-online-advertising-marketing/) 

## [Google Tag Manager Vs. Adobe Launch](https://www.blastam.com/blog/tag-management-system-comparison-know-your-options) 

## [Marketing Analytics Vs. Web Analytics](https://edkentmedia.com/difference-web-marketing-analytics/) 

# Q1] TheLibyanReport Google Analytics 
For the week between June 16 - June 22:
- None of the users from any of the Arabic speaking nations have accessed the website in the Arabic language. Even Libyans, to which the website is dedicated to and is the 2nd highest in terms of users from a particular country, seem to prefer their browsers to be in the English language. 
- Even though China ranked 9th in its overall use of the website, they showed the highest goal conversion rate during the week as compared to any other country in the list. China also showed the highest average session duration, pages/ session and the lowest bounce rate when compared to other countries on the list. Perhaps increasing the number of articles that talk about China's stance on Libya may attract more users from here. However, the total number of users from China is relatively small as compared to the top 2 in the list. 

# Q2] Data Studio Basics: 
## Reports 
- View all reports you have access to
- Filter by ownership
- Search by name
- Sort by name or date

## Data Sources 
- View all data sources you have access to
- Filter by ownership
- Search by name
- Sort by name or date

A **field** contains the information - the metric or dimension - that will appear in the reports.
- **Count** is an aggregation that counts the number of values of a field within the current filter context. Each occurrence of a value is counted. eg. if “Country” = US, DE, FR, US, US, IT, then Count = 6.
- **Count distinct** counts only unique values, excluding duplicates.
Using the same example, if “Country” = US, DE, FR, US, US, IT, then Count distinct = 4, because the duplicate “US” values are excluded.
- **Duplicate** creates a new field identical to this one, which you would edit to be represented a different way.
- To **Disable** a field means it won’t be available for use in charts referencing this data source.
- To **Remove** a field means it'd be permanently deleted. This option is only available for fields that the user (collaborator) created in Data Studio via duplication or calculation; this option will be grayed out if the field came directly from the data set. 

**Index** is the numerical value assigned to a specific metric or dimension.

The **“Type”** column denotes the kind of data captured in the specified field.

**Aggregation** refers to how the data is structured, i.e., if it groups values together at all. 
In Data Studio, fields can have the following aggregation methods:

- Average
- Count
- Count Distinct
- Max
- Min
- Sum
- Auto
- None

**Description** provides details about what is captured in the specific field.

**“Add a field”** allows the creation of a new  metric or dimension derived from existing data. eg. Creating a new metric that represents the average of a metric, the sum of the values of a dimension, or the ratio of two different metrics.

## Explorer
- Helps you find insights faster by streamlining editing and        viewing experience and applying filters quickly.
- Acts as a scratchpad; temporary unless you save 
- Private only to you; may not be shared directly
- Can be exported to reports for saving and sharing 

## More Help Tools
- Product Overview: Learn about Data Studio
- Report Gallery: View featured reports
- Connect to data: New data source shortcut
- New features: Learn the latest Data Studio updates
- Video tutorials: Walk-throughs teach how to use various features
- User settings: Change your email preferences

## Dynamic Control on Visualizations 
- **Data Credentials** allows a user to access the report with either an owner's credentials or with the credentials of the 2nd or 3rd party users themselves. 

- **Community Visualizations Access** allows 3rd party users to include information / data in the report 

- Having owner or edit access to the data source, **Field Editing in Reports** toggle enables or disables field editing at the report level. This determines whether all field changes could also be done at the report level.  New data sources have this option turned on by default.

-  Date range, filter, data control: Add controls that allow a viewer to filter or otherwise restrict the data included in their view of the report.

## Report Components
- **Tables** summarize data such that each row in the table displays the summary for each unique combination of the dimensions included. A Data Studio table can have up to 10 dimensions and 10 metrics.
- **Charts** visualize data from the data source(s). Various chart types include bar chart, time series, or scatter plot.
- **Image** files can be directly inserted into the report and resized as needed. 
- **Shapes** can be used to add design to reports. eg. using a rectangle to build a banner at the top of the page, or using squares and circles to highlight important information. 
- **Scorecards** show a single, critical metric.  
- **Controls** allow viewers to filter the information on the page.  There are a few different types that allow users to change the date range, filter based on a dimension, or even change the data set to a different data set they have access to. 











