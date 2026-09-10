# AdSense 与 SEO 恢复计划

这份计划用于把 Random Object Generator 从“可用工具站”继续推进到“更容易被搜索引擎和 AdSense 识别为有价值内容的网站”。核心原则是：先补信任与可审核性，再补真实内容与对象库，最后做外部信号和性能优化。

## 当前诊断

- Google 已经开始测试网站：GSC 有曝光和点击，平均排名不差，但样本量很小，说明不是完全抓取失败。
- GA4 暴露首要问题：英文首页跳出率偏高，平均互动时长偏短，用户还没有稳定形成“生成、复制、继续浏览”的路径。
- AdSense 低价值内容的主要风险不是某一个标签，而是整体信号：工具页多、资源型内容少、对象库偏小、信任页不够完整、外部引用少。
- Cloudflare 部署可以继续使用，但当前根路径页面因为动态 `headers()` 用于语言识别，会牺牲一部分缓存效率。它不是 AdSense 失败主因，但属于后续性能优化项。

## 阶段一：AdSense 信任层

目标：让审核人员和爬虫明确知道网站是谁维护、如何联系、内容怎么产生、数据怎么处理。

已执行：

- [x] 新增 `/contact`、`/zh/contact`、`/ja/contact`。
- [x] 新增 `/editorial-policy`、`/zh/editorial-policy`、`/ja/editorial-policy`。
- [x] Footer 增加 Contact、Editorial Policy 和邮箱入口。
- [x] Sitemap 增加 Contact 与 Editorial Policy。
- [x] About 补充维护主体、更新依据和公开反馈路径。
- [x] Privacy 补充 Cloudflare、GA4 和未来 AdSense Cookie 说明。
- [x] Terms 补充生成内容的使用边界。
- [x] 新增 Cookie/Consent 提示，默认拒绝非必要 Google 存储，用户接受后才加载 GA4 与 AdSense。
- [x] 默认关闭 Google ad personalization 与 ad user data consent，降低儿童页和 EEA/UK 审核风险。

复审前检查点：

- [ ] `contact@randomobject.co` 邮箱实际可收信。
- [ ] AdSense 申请前，Privacy 与实际广告/统计配置一致。
- [ ] About、Contact、Privacy、Terms、Editorial Policy 都能从 Footer 一跳访问。
- [ ] Search Console 重新提交 sitemap，并对新增信任页请求索引。

## 阶段二：内容价值层

目标：降低“薄内容 / 低价值内容”判断概率，让每个核心页面都有明确的 What / How / Why / FAQ / 示例。

优先页面：

- [x] `/` 首页：补更明确的使用路径说明、对象库规模和示例对象。
- [x] `/random-object-generator`：强化“随机物品生成器”的核心说明与复制流程。
- [x] `/random-object-to-draw`：围绕 `random object to draw` 增加绘画参考、练习建议和示例对象。
- [x] `/random-kitchen-objects`：承接厨房物品与食物随机化意图。
- [x] `/random-objects-for-pictionary`：补规则、回合设计、适合/不适合物品说明。
- [x] `/random-objects-for-esl`：补 ESL 课堂活动步骤、词汇练习方法。

页面级检查点：

- [x] 页面顶部先满足工具使用，不让 SEO 文本压住结果。
- [x] 页面底部保留结构化内容：What、How、Why、Use cases、FAQ。
- [x] 每个页面的示例对象不是机械复用同一批。
- [x] 内链至少指向相关分类、专题页和信任页。
- [x] FAQ 内容回答真实问题，避免关键词堆砌。
- [x] 给 intent 页面统一补充“用途边界 / 内容质量检查”深度模块，降低批量模板页风险。

## 阶段三：对象库与图片层

目标：让工具本身更有用，减少用户点击更多却拿不到结果的问题。

优先任务：

- [x] 对象库扩充到 300 个对象，5 个核心分类各 60 个。
- [x] 每个对象具备英文名、中文名、日文名、描述和分类。
- [x] 已有真实图片优先使用 `.webp`，并通过 `object-image-meta.json` 提供准确 alt 文本。
- [x] 首屏图片保留 `priority`，非首屏图片走默认懒加载。
- [x] 为新增 250 个扩展对象逐步补齐真实图片，不使用错配图片冒充真实素材。
- [x] 支持通过 `NEXT_PUBLIC_OBJECT_IMAGE_BASE_URL` 把图片切到 Cloudflare R2/CDN。
- [x] 新增 R2 图片上传脚本与配置文档，避免图片请求压到 Worker。
- [ ] 后续继续为扩展对象补真实图片，并上传到 R2，而不是把大批原图塞进 Git。

## 阶段四：收录与外部信号

目标：让 Google 有更多理由发现、抓取和信任站点。

执行建议：

- [ ] 在 GSC 中提交 sitemap，并对首页、核心专题页、信任页请求索引。
- [ ] 去 Reddit 的 drawing、ESL、teacher、party game 社区做真实分享，避免广告式硬推。
- [ ] 提交到工具目录、独立产品目录和教育资源列表。
- [ ] 为每个新增外链记录来源、目标页、发布时间和后续点击情况。
- [ ] 等自然搜索稳定后再申请 AdSense，避免频繁失败造成审核噪音。

## 阶段五：Cloudflare 性能层

目标：降低动态渲染与图片加载对体验的影响。

检查点：

- [x] 添加 CDN 友好的 `cache-control`，核心页面使用 `s-maxage=86400`，robots/sitemap/ads.txt 使用浏览器 1 小时与 CDN 1 天缓存。
- [x] 移除根布局和 Footer 的请求头语言读取，让英文核心路由重新静态预渲染。
- [x] 修复首屏随机结果的 hydration mismatch，改为 seed 驱动的确定性初始结果。
- [ ] 用 Lighthouse / PageSpeed 测首页和核心专题页的 LCP、CLS、INP。
- [x] 图片规模扩大后，改用 R2 自定义域名，并记录缓存命中率。
- [ ] 在 Cloudflare 后台给 `cdn.randomobject.co/images/*` 配置长缓存规则。
