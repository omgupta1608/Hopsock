<template>
  <div>
      <div class="create-wk">
          <a class="waves-effect waves-light btn green accent-3"><i class="material-icons right">assignment</i>New</a>
      </div>
    <div v-if="wks.length == 0" class="no-wk">
      <h1>You don't have any workspaces. Creat One!</h1>
    </div>
    <div v-if="wks.length != 0">
      <div class="workspaces-main" v-for="(wk, index) in wks" :key="index">
        <div class="card" @click="openWk(wk._id)">
          <div class="media media--80x80 float-right">
            <img
              src="https://picsum.photos/400"
              alt=""
              width="640"
              height="426"
            />
          </div>
          <div class="primary-title">
            <div class="primary-text">{{wk.name}}</div>
            <div class="secondary-text">{{wk.members.length}} member(s)</div>
          </div>
          <div class="supporting-text">
            {{wk.description}}
          </div>
          <div class="actions">
            <div class="action-buttons">
              <button class="button" type="button">View More</button>
            </div>
            <div class="action-icons float-right">
              <i class="material-icons action-icon" role="button" title="Share"
                >share</i
              >
              <i
                class="material-icons action-icon"
                role="button"
                title="More options"
                >more_vert</i
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Workspace",
  data: () => ({
    wks: [
      {
        member_count: 1,
        members: ["5f9ac674223ecc215852a3fc", "5f9ac674223ecc215852a3fc"],
        description: "A grp of devs!",
        _id: "5f9ac706223ecc215852a3fd",
        name: "Team Cipherror",
        owner: "5f9ac674223ecc215852a3fc",
        __v: 0,
      },
      {
        member_count: 1,
        members: ["5f9ac674223ecc215852a3fc", "5f9ac674223ecc215852a3fc"],
        description: "A API dev tool",
        _id: "5f9ac706223ecc215852a3fd",
        name: "Apimote",
        owner: "5f9ac674223ecc215852a3fc",
        __v: 0,
      },
      {
        member_count: 1,
        members: ["5f9ac674223ecc215852a3fc", "5f9ac674223ecc215852a3fc"],
        description: "Digi. Marketting",
        _id: "5f9ac706223ecc215852a3fd",
        name: "Bhoomi's Team",
        owner: "5f9ac674223ecc215852a3fc",
        __v: 0,
      },
      {
        member_count: 1,
        members: ["5f9ac674223ecc215852a3fc", "5f9ac674223ecc215852a3fc"],
        description: "A grp of devs!",
        _id: "5f9ac706223ecc215852a3fd",
        name: "Team Cipherror",
        owner: "5f9ac674223ecc215852a3fc",
        __v: 0,
      },
    ],
  }),
  methods:{
    async openWk(wid){
      await this.$store.commit("changeOpenedWkId", wid);
      console.log(this.$store.state);
      window.open(`workspace`,'_self');
    }
  }
};
</script>
<style>
.create-wk{
    width:100%;
}
.create-wk a{
    float: right;
    margin: 10px;
}
.button {
  background-color: transparent;
  border: none;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.75px;
  line-height: 36px;
  min-width: 64px;
  padding: 0 8px;
  text-align: center;
  text-transform: uppercase;
}
.button,
.action-icon {
  -webkit-transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.button--raised {
  -moz-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  -o-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition: 0 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    0 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.button--raised:focus,
.button--raised:hover {
  -moz-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.button--purple {
  background-color: #6200ee;
  color: #fff;
}
.button:hover,
.action-icon:hover {
  background-color: rgba(158, 158, 158, 0.2);
}
.button:active,
.action-icon:active {
  background-color: rgba(158, 158, 158, 0.4);
}
.button:focus:not(:active),
.action-icon:focus:not(:active) {
  background-color: rgba(0, 0, 0, 0.12);
}
.button[disabled] {
  color: rgba(0, 0, 0, 0.26);
  cursor: default;
}
.button[disabled]:hover {
  background: none;
}
.action-buttons,
.action-icons {
  display: inline-block;
  vertical-align: middle;
}
.action-icon {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 2px;
  outline: none;
  padding: 6px;
}
.action-icons {
  color: rgba(0, 0, 0, 0.54);
}
.actions {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
  position: relative;
  z-index: 1;
}
.workspaces-main {
  display: flex;
  flex-wrap: wrap;
}
.card {
  background-color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
  margin: 8px;
  min-width: 18rem;
  width: 55rem;
  overflow: hidden;
  position: relative;
}
.card:hover {
  cursor: pointer;
}

.float-right {
  float: right !important;
}
.media {
  position: relative;
}
.media .action-icon {
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.54);
}
.media .actions {
  background-image: linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0));
  color: #fff;
  position: absolute;
  width: 100%;
}
.media .optional-header {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  display: block;
  float: left;
  width: 100%;
  z-index: 100;
}
.media .optional-header .primary-title {
  background-image: none;
  width: auto;
}
.media .primary-title {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.46));
  bottom: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 16px 24px;
  position: absolute;
  width: 100%;
  z-index: 1;
}
[class*="media--"] {
  height: 0;
  overflow: hidden;
}
.media--1-1 {
  padding-bottom: 100%;
}
.media--16-9 {
  padding-bottom: 56.25%;
}
.media--16-9 > img,
.media--3-2 > img,
.media--4-3 > img {
  height: auto;
  left: 50%;
  top: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
}
.media--16-9 img,
.media--3-2 img,
.media--4-3 img,
.media--80x80 img,
.media--1-1 img,
.media--3-4 img,
.media--2-3 img {
  position: absolute;
}
.media--2-3 {
  padding-bottom: 150%;
}
.media--3-2 {
  padding-bottom: 66.66%;
}
.media--3-4 {
  padding-bottom: 133.33%;
}
.media--4-3 {
  padding-bottom: 75%;
}
.media--80x80 {
  margin: 16px;
  padding-bottom: 80px;
  width: 80px;
}
.media--80x80 > img,
.media--1-1 > img,
.media--3-4 > img,
.media--2-3 > img {
  height: 100%;
  left: 50%;
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  width: auto;
}
.optional-header {
  min-height: 40px;
  padding: 16px;
  position: relative;
}
.optional-header .action-icons {
  float: right;
  position: relative;
  right: -8px;
  top: 2px;
}
.optional-header .primary-title {
  bottom: auto;
  display: inline-block;
  padding: 0;
  position: absolute;
  top: 50%;
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.primary-text {
  font-size: 24px;
}
.primary-text + .secondary-text,
.secondary-text + .primary-text,
.optional-header + .primary-text {
  margin-top: calc(
    24px / 2 / 2
  ); /* margin-top is 50% of the primary title font size. */
}
.primary-title {
  padding: 24px 16px 16px;
}
.primary-title + .supporting-text,
.optional-header + .supporting-text {
  padding-top: 0;
}
.primary-title .optional-header {
  padding-left: 0;
  padding-right: 0;
}
.secondary-text .action-icon {
  font-size: inherit;
  margin: 0;
  padding: 0;
}
.subhead,
.secondary-text {
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
}
.supporting-text {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px;
}
.title {
  font-size: 14px;
  font-weight: 500;
}
.title + .subhead {
  margin-top: calc(
    14px / 2 / 2
  ); /* margin-top is 50% of the title font size. */
}
.title,
.primary-text {
  line-height: 1.2;
}
</style>