import Mock from "mockjs"
import data from "./mock.json"
import dataData from "./data.json"
Mock.mock("/api/list","get",data)
Mock.mock("/api/better","get",dataData)