export interface AlignmentParameters {
    buildType?: string;
    parameters?: string;
}
export interface AnalyzedArtifact {
    archiveFilenames?: string[];
    archiveUnmatchedFilenames?: string[];
    artifact?: Artifact;
    brewId?: number; // int64
    builtFromSource?: boolean;
    distribution?: AnalyzedDistribution;
    licenses?: LicenseInfo[];
}
export interface AnalyzedArtifactPage {
    content?: AnalyzedArtifact[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface AnalyzedDistribution {
    creationTime?: string; // date-time
    distributionUrl?: string;
    md5?: string;
    sha1?: string;
    sha256?: string;
}
export interface Artifact {
    artifactQuality: "NEW" | "VERIFIED" | "TESTED" | "DEPRECATED" | "BLACKLISTED" | "DELETED" | "TEMPORARY" | "IMPORTED";
    build?: Build;
    buildCategory: "STANDARD" | "SERVICE" | "AUTO";
    creationTime?: string; // date-time
    creationUser?: User;
    deployPath?: string;
    deployUrl?: string;
    filename?: string;
    id: string;
    identifier: string;
    importDate?: string; // date-time
    md5?: string;
    modificationTime?: string; // date-time
    modificationUser?: User;
    originUrl?: string;
    publicUrl?: string;
    purl?: string;
    qualityLevelReason?: string;
    sha1?: string;
    sha256?: string;
    size?: number; // int64
    targetRepository?: TargetRepository;
}
export interface ArtifactInfo {
    artifactQuality?: "NEW" | "VERIFIED" | "TESTED" | "DEPRECATED" | "BLACKLISTED" | "DELETED" | "TEMPORARY" | "IMPORTED";
    buildCategory?: "STANDARD" | "SERVICE" | "AUTO";
    id?: string;
    identifier?: string;
    repositoryType?: "MAVEN" | "NPM" | "COCOA_POD" | "GENERIC_PROXY" | "DISTRIBUTION_ARCHIVE";
}
export interface ArtifactInfoPage {
    content?: ArtifactInfo[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ArtifactPage {
    content?: Artifact[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ArtifactRevision {
    artifactQuality?: "NEW" | "VERIFIED" | "TESTED" | "DEPRECATED" | "BLACKLISTED" | "DELETED" | "TEMPORARY" | "IMPORTED";
    buildCategory?: "STANDARD" | "SERVICE" | "AUTO";
    id: string;
    modificationTime?: string; // date-time
    modificationUser?: User;
    qualityLevelReason?: string;
    rev?: number; // int32
}
export interface ArtifactRevisionPage {
    content?: ArtifactRevision[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface Banner {
    banner?: string;
}
export interface Build {
    alignmentPreference?: "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
    attributes?: {
        [name: string]: string;
    };
    buildConfigRevision?: BuildConfigurationRevisionRef;
    buildContentId?: string;
    buildOutputChecksum?: string;
    endTime?: string; // date-time
    environment?: Environment;
    groupBuild?: GroupBuildRef;
    id: string;
    lastUpdateTime?: string; // date-time
    noRebuildCause?: BuildRef;
    productMilestone?: ProductMilestoneRef;
    progress?: "PENDING" | "IN_PROGRESS" | "FINISHED";
    project?: ProjectRef;
    scmBuildConfigRevision?: string;
    scmBuildConfigRevisionInternal?: boolean;
    scmRepository?: SCMRepository;
    scmRevision?: string;
    scmTag?: string;
    scmUrl?: string;
    startTime?: string; // date-time
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "ENQUEUED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    submitTime?: string; // date-time
    temporaryBuild?: boolean;
    user?: User;
}
export interface BuildConfigCreationResponse {
    buildConfig?: BuildConfiguration;
    taskId?: string;
}
export interface BuildConfigPage {
    content?: BuildConfiguration[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildConfigRevisionPage {
    content?: BuildConfigurationRevision[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildConfigWithLatestPage {
    content?: BuildConfigurationWithLatestBuild[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildConfigWithSCMRequest {
    buildConfig?: BuildConfiguration;
    preBuildSyncEnabled?: boolean;
    scmUrl: string;
}
export interface BuildConfiguration {
    brewPullActive?: boolean;
    buildScript?: string;
    buildType: "MVN" | "NPM" | "GRADLE" | "SBT";
    creationTime?: string; // date-time
    creationUser?: User;
    defaultAlignmentParams?: string;
    dependencies?: {
        [name: string]: BuildConfigurationRef;
    };
    description?: string;
    environment?: Environment;
    groupConfigs?: {
        [name: string]: GroupConfigurationRef;
    };
    id: string;
    modificationTime?: string; // date-time
    modificationUser?: User;
    name: string; // ^[a-zA-Z0-9_.][a-zA-Z0-9_.-]*(?<!\.git)$
    parameters?: {
        [name: string]: string;
    };
    productVersion?: ProductVersionRef;
    project?: ProjectRef;
    scmRepository?: SCMRepository;
    scmRevision?: string;
}
export interface BuildConfigurationRef {
    brewPullActive?: boolean;
    buildScript?: string;
    buildType: "MVN" | "NPM" | "GRADLE" | "SBT";
    creationTime?: string; // date-time
    defaultAlignmentParams?: string;
    description?: string;
    id: string;
    modificationTime?: string; // date-time
    name: string; // ^[a-zA-Z0-9_.][a-zA-Z0-9_.-]*(?<!\.git)$
    scmRevision?: string;
}
export interface BuildConfigurationRevision {
    brewPullActive?: boolean;
    buildScript?: string;
    buildType?: "MVN" | "NPM" | "GRADLE" | "SBT";
    creationTime?: string; // date-time
    creationUser?: User;
    defaultAlignmentParams?: string;
    environment?: Environment;
    id: string;
    modificationTime?: string; // date-time
    modificationUser?: User;
    name?: string;
    parameters?: {
        [name: string]: string;
    };
    project?: ProjectRef;
    rev?: number; // int32
    scmRepository?: SCMRepository;
    scmRevision?: string;
}
export interface BuildConfigurationRevisionRef {
    brewPullActive?: boolean;
    buildScript?: string;
    buildType?: "MVN" | "NPM" | "GRADLE" | "SBT";
    creationTime?: string; // date-time
    defaultAlignmentParams?: string;
    id: string;
    modificationTime?: string; // date-time
    name?: string;
    rev?: number; // int32
    scmRevision?: string;
}
export interface BuildConfigurationWithLatestBuild {
    brewPullActive?: boolean;
    buildScript?: string;
    buildType: "MVN" | "NPM" | "GRADLE" | "SBT";
    creationTime?: string; // date-time
    creationUser?: User;
    defaultAlignmentParams?: string;
    dependencies?: {
        [name: string]: BuildConfigurationRef;
    };
    description?: string;
    environment?: Environment;
    groupConfigs?: {
        [name: string]: GroupConfigurationRef;
    };
    id: string;
    latestBuild?: BuildRef;
    latestBuildUsername?: string;
    modificationTime?: string; // date-time
    modificationUser?: User;
    name: string; // ^[a-zA-Z0-9_.][a-zA-Z0-9_.-]*(?<!\.git)$
    parameters?: {
        [name: string]: string;
    };
    productVersion?: ProductVersionRef;
    project?: ProjectRef;
    scmRepository?: SCMRepository;
    scmRevision?: string;
}
export interface BuildEnvironmentPage {
    content?: Environment[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildPage {
    content?: Build[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildPushParameters {
    reimport?: boolean;
    tagPrefix: string;
}
export interface BuildPushResult {
    brewBuildId?: number; // int32
    brewBuildUrl?: string;
    buildId: string;
    id: string;
    logContext?: string;
    message?: string;
    productMilestoneCloseResult?: ProductMilestoneCloseResultRef;
    status: "ACCEPTED" | "SUCCESS" | "REJECTED" | "FAILED" | "SYSTEM_ERROR" | "CANCELED";
    userInitiator?: string;
}
export interface BuildPushResultRef {
    brewBuildId?: number; // int32
    brewBuildUrl?: string;
    buildId: string;
    id: string;
    logContext?: string;
    message?: string;
    status: "ACCEPTED" | "SUCCESS" | "REJECTED" | "FAILED" | "SYSTEM_ERROR" | "CANCELED";
    userInitiator?: string;
}
export interface BuildRecordInsights {
    autoalign?: boolean;
    brewpullactive?: boolean;
    buildConfigSetRecordId?: number; // int32
    buildConfigurationId?: number; // int32
    buildConfigurationName?: string;
    buildConfigurationRev?: number; // int32
    buildContentId?: string;
    buildId?: number; // int64
    buildType?: string;
    endTime?: string; // date-time
    executionRootName?: string;
    executionRootVersion?: string;
    lastUpdateTime?: string; // date-time
    productId?: number; // int32
    productMilestoneId?: number; // int32
    productMilestoneVersion?: string;
    productName?: string;
    productVersionId?: number; // int32
    productVersionVersion?: string;
    projectId?: number; // int32
    projectName?: string;
    startTime?: string; // date-time
    status?: string;
    submitMonth?: number; // int32
    submitQuarter?: number; // int32
    submitTime?: string; // date-time
    submitYear?: number; // int32
    temporarybuild?: boolean;
    userId?: number; // int32
    username?: string;
}
export interface BuildRecordInsightsPage {
    content?: BuildRecordInsights[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface BuildRef {
    alignmentPreference?: "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
    buildContentId?: string;
    buildOutputChecksum?: string;
    endTime?: string; // date-time
    id: string;
    lastUpdateTime?: string; // date-time
    progress?: "PENDING" | "IN_PROGRESS" | "FINISHED";
    scmBuildConfigRevision?: string;
    scmBuildConfigRevisionInternal?: boolean;
    scmRevision?: string;
    scmTag?: string;
    scmUrl?: string;
    startTime?: string; // date-time
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "ENQUEUED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    submitTime?: string; // date-time
    temporaryBuild?: boolean;
}
export interface BuildsGraph {
    edges?: EdgeBuild[];
    vertices?: {
        [name: string]: VertexBuild;
    };
}
export interface ComponentVersion {
    builtOn?: string; // date-time
    commit?: string;
    components?: ComponentVersion[];
    name?: string;
    version?: string;
}
export interface CreateAndSyncSCMRequest {
    preBuildSyncEnabled?: boolean;
    scmUrl: string;
}
export interface DeliverableAnalyzerLabelEntry {
    change?: "ADDED" | "REMOVED";
    date?: string; // date-time
    label?: "DELETED" | "SCRATCH" | "RELEASED";
    reason?: string;
    user?: User;
}
export interface DeliverableAnalyzerLabelEntryPage {
    content?: DeliverableAnalyzerLabelEntry[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface DeliverableAnalyzerOperation {
    endTime?: string; // date-time
    id: string;
    parameters?: {
        [name: string]: string;
    };
    productMilestone?: ProductMilestoneRef;
    progressStatus?: "NEW" | "PENDING" | "IN_PROGRESS" | "FINISHED";
    result?: "SUCCESSFUL" | "FAILED" | "REJECTED" | "CANCELLED" | "TIMEOUT" | "SYSTEM_ERROR";
    startTime?: string; // date-time
    submitTime?: string; // date-time
    user?: User;
}
export interface DeliverableAnalyzerOperationPage {
    content?: DeliverableAnalyzerOperation[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface DeliverableAnalyzerReport {
    endTime?: string; // date-time
    id?: string;
    labels?: ("DELETED" | "SCRATCH" | "RELEASED")[];
    productMilestone?: ProductMilestoneRef;
    startTime?: string; // date-time
    submitTime?: string; // date-time
    urls?: string[];
    user?: User;
}
export interface DeliverableAnalyzerReportLabelRequest {
    label?: "DELETED" | "SCRATCH" | "RELEASED";
    reason?: string;
}
export interface DeliverableAnalyzerReportPage {
    content?: DeliverableAnalyzerReport[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface DeliverablesAnalysisRequest {
    deliverablesUrls: string[];
    runAsScratchAnalysis?: boolean;
}
export interface DeliveredArtifactInMilestones {
    artifactIdentifierPrefix?: string;
    productMilestoneArtifacts?: {
        [name: string]: ParsedArtifact[];
    };
}
export interface EdgeBuild {
    cost?: number; // int32
    source?: string;
    target?: string;
}
export interface Environment {
    attributes?: {
        [name: string]: string;
    };
    deprecated?: boolean;
    description?: string;
    hidden?: boolean;
    id: string;
    name?: string;
    systemImageId: string;
    systemImageRepositoryUrl?: string;
    systemImageType: "DOCKER_IMAGE" | "VIRTUAL_MACHINE_RAW" | "VIRTUAL_MACHINE_QCOW2" | "LOCAL_WORKSPACE";
}
export interface EnvironmentDeprecationRequest {
    replacementEnvironmentId: string;
}
export interface ErrorResponse {
    details?: {
        [key: string]: any;
    };
    errorMessage?: string;
    errorType?: string;
}
export interface GraphBuild {
    edges?: EdgeBuild[];
    vertices?: {
        [name: string]: VertexBuild;
    };
}
export interface GroupBuild {
    alignmentPreference?: "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
    endTime?: string; // date-time
    groupConfig?: GroupConfigurationRef;
    id: string;
    productVersion?: ProductVersionRef;
    startTime?: string; // date-time
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "ENQUEUED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    temporaryBuild?: boolean;
    user?: User;
}
export interface GroupBuildPage {
    content?: GroupBuild[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface GroupBuildPushRequest {
    tagPrefix?: string;
}
export interface GroupBuildRef {
    alignmentPreference?: "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
    endTime?: string; // date-time
    id: string;
    startTime?: string; // date-time
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "ENQUEUED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    temporaryBuild?: boolean;
}
export interface GroupBuildRequest {
    buildConfigurationRevisions?: BuildConfigurationRevisionRef[];
}
export interface GroupConfigPage {
    content?: GroupConfiguration[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface GroupConfiguration {
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
    id: string;
    name: string;
    productVersion?: ProductVersionRef;
}
export interface GroupConfigurationRef {
    id: string;
    name: string;
}
export interface LicenseInfo {
    comments?: string;
    distribution?: string;
    name?: string;
    source?: "UNKNOWN" | "POM" | "POM_XML" | "BUNDLE_LICENSE" | "TEXT";
    spdxLicenseId?: string;
    url?: string;
}
export interface MilestoneInfo {
    built?: boolean;
    milestoneEndDate?: string; // date-time
    milestoneId?: string;
    milestoneVersion?: string;
    productId?: string;
    productName?: string;
    productVersionId?: string;
    productVersionVersion?: string;
    releaseId?: string;
    releaseReleaseDate?: string; // date-time
    releaseVersion?: string;
}
export interface MilestoneInfoPage {
    content?: MilestoneInfo[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageAnalyzedArtifact {
    content?: AnalyzedArtifact[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageArtifact {
    content?: Artifact[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageArtifactInfo {
    content?: ArtifactInfo[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageArtifactRevision {
    content?: ArtifactRevision[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageBuild {
    content?: Build[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageBuildConfiguration {
    content?: BuildConfiguration[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageBuildConfigurationRevision {
    content?: BuildConfigurationRevision[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageBuildConfigurationWithLatestBuild {
    content?: BuildConfigurationWithLatestBuild[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageBuildRecordInsights {
    content?: BuildRecordInsights[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageDeliverableAnalyzerLabelEntry {
    content?: DeliverableAnalyzerLabelEntry[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageDeliverableAnalyzerOperation {
    content?: DeliverableAnalyzerOperation[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageDeliverableAnalyzerReport {
    content?: DeliverableAnalyzerReport[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageEnvironment {
    content?: Environment[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageGroupBuild {
    content?: GroupBuild[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageGroupConfiguration {
    content?: GroupConfiguration[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageMilestoneInfo {
    content?: MilestoneInfo[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProduct {
    content?: Product[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductMilestone {
    content?: ProductMilestone[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductMilestoneArtifactQualityStatistics {
    content?: ProductMilestoneArtifactQualityStatistics[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductMilestoneCloseResult {
    content?: ProductMilestoneCloseResult[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductMilestoneRepositoryTypeStatistics {
    content?: ProductMilestoneRepositoryTypeStatistics[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductRelease {
    content?: ProductRelease[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProductVersion {
    content?: ProductVersion[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageProject {
    content?: Project[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageSCMRepository {
    content?: SCMRepository[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface PageTargetRepository {
    content?: TargetRepository[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface Parameter {
    description?: string;
    name?: string;
}
export interface ParsedArtifact {
    artifactVersion?: string;
    classifier?: string;
    id?: string;
    type?: string;
}
export interface PncStatus {
    banner?: string;
    eta?: string; // date-time
    isMaintenanceMode: boolean;
}
export interface Product {
    abbreviation: string; // [a-zA-Z0-9-]+
    description?: string;
    id: string;
    name: string;
    productManagers?: string;
    productPagesCode?: string;
    productVersions?: {
        [name: string]: ProductVersionRef;
    };
}
export interface ProductMilestone {
    deliveredArtifactsImporter?: User;
    distributedArtifactsImporter?: User;
    endDate?: string; // date-time
    id: string;
    plannedEndDate?: string; // date-time
    productRelease?: ProductReleaseRef;
    productVersion?: ProductVersionRef;
    startingDate?: string; // date-time
    version: string; // ^[0-9]+\.[0-9]+(\.\w[\w-]*)+$
}
export interface ProductMilestoneArtifactQualityStatistics {
    artifactQuality?: {
        [name: string]: number; // int64
    };
    productMilestone?: ProductMilestoneRef;
}
export interface ProductMilestoneCloseResult {
    buildPushResults?: BuildPushResultRef[];
    endDate?: string; // date-time
    id: string;
    milestone?: ProductMilestoneRef;
    startingDate: string; // date-time
    status: "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | "CANCELED" | "SYSTEM_ERROR";
}
export interface ProductMilestoneCloseResultPage {
    content?: ProductMilestoneCloseResult[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductMilestoneCloseResultRef {
    endDate?: string; // date-time
    id: string;
    startingDate: string; // date-time
    status: "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | "CANCELED" | "SYSTEM_ERROR";
}
export interface ProductMilestoneDeliveredArtifactsStatistics {
    noBuild?: number; // int64
    noMilestone?: number; // int64
    otherMilestones?: number; // int64
    otherProducts?: number; // int64
    thisMilestone?: number; // int64
}
export interface ProductMilestonePage {
    content?: ProductMilestone[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductMilestoneRef {
    endDate?: string; // date-time
    id: string;
    plannedEndDate?: string; // date-time
    startingDate?: string; // date-time
    version: string; // ^[0-9]+\.[0-9]+(\.\w[\w-]*)+$
}
export interface ProductMilestoneRepositoryTypeStatistics {
    productMilestone?: ProductMilestoneRef;
    repositoryType?: {
        [name: string]: number; // int64
    };
}
export interface ProductMilestoneStatistics {
    artifactQuality?: {
        [name: string]: number; // int64
    };
    artifactsInMilestone?: number; // int64
    deliveredArtifactsSource?: ProductMilestoneDeliveredArtifactsStatistics;
    repositoryType?: {
        [name: string]: number; // int64
    };
}
export interface ProductPage {
    content?: Product[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductRef {
    abbreviation: string; // [a-zA-Z0-9-]+
    description?: string;
    id: string;
    name: string;
    productManagers?: string;
    productPagesCode?: string;
}
export interface ProductRelease {
    commonPlatformEnumeration?: string;
    id: string;
    productMilestone?: ProductMilestoneRef;
    productPagesCode?: string;
    productVersion?: ProductVersionRef;
    releaseDate?: string; // date-time
    supportLevel?: "UNRELEASED" | "EARLYACCESS" | "SUPPORTED" | "EXTENDED_SUPPORT" | "EOL";
    version?: string;
}
export interface ProductReleasePage {
    content?: ProductRelease[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductReleaseRef {
    commonPlatformEnumeration?: string;
    id: string;
    productPagesCode?: string;
    releaseDate?: string; // date-time
    supportLevel?: "UNRELEASED" | "EARLYACCESS" | "SUPPORTED" | "EXTENDED_SUPPORT" | "EOL";
    version?: string;
}
export interface ProductVersion {
    attributes?: {
        [name: string]: string;
    };
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
    currentProductMilestone?: ProductMilestoneRef;
    groupConfigs?: {
        [name: string]: GroupConfigurationRef;
    };
    id: string;
    product?: ProductRef;
    productMilestones?: {
        [name: string]: ProductMilestoneRef;
    };
    productReleases?: {
        [name: string]: ProductReleaseRef;
    };
    version: string; // ^[0-9]+\.[0-9]+$
}
export interface ProductVersionArtifactQualityStatisticsPage {
    content?: ProductMilestoneArtifactQualityStatistics[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductVersionDeliveredArtifactsStatistics {
    noBuild?: number; // int64
    noMilestone?: number; // int64
    otherProducts?: number; // int64
    otherVersions?: number; // int64
    thisVersion?: number; // int64
}
export interface ProductVersionPage {
    content?: ProductVersion[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductVersionRef {
    attributes?: {
        [name: string]: string;
    };
    id: string;
    version: string; // ^[0-9]+\.[0-9]+$
}
export interface ProductVersionRepositoryTypeStatisticsPage {
    content?: ProductMilestoneRepositoryTypeStatistics[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProductVersionStatistics {
    artifactsInVersion?: number; // int64
    deliveredArtifactsSource?: ProductVersionDeliveredArtifactsStatistics;
    milestoneDependencies?: number; // int64
    milestones?: number; // int64
    productDependencies?: number; // int64
}
export interface Project {
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
    description?: string;
    engineeringTeam?: string;
    id: string;
    issueTrackerUrl?: string;
    name: string;
    projectUrl?: string;
    technicalLeader?: string;
}
export interface ProjectPage {
    content?: Project[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface ProjectRef {
    description?: string;
    engineeringTeam?: string;
    id: string;
    issueTrackerUrl?: string;
    name: string;
    projectUrl?: string;
    technicalLeader?: string;
}
export interface RepositoryCreationResponse {
    repository?: SCMRepository;
    taskId?: number; // int64
}
export interface RunningBuildCount {
    enqueued?: number; // int32
    running?: number; // int32
    waitingForDependencies?: number; // int32
}
export interface SCMRepository {
    externalUrl?: string;
    id: string;
    internalUrl: string;
    preBuildSyncEnabled?: boolean;
}
export interface SCMRepositoryPage {
    content?: SCMRepository[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface SSHCredentials {
    command?: string;
    password?: string;
}
export interface ScratchDeliverablesAnalysisRequest {
    deliverablesUrls: string[];
}
export interface TargetRepository {
    id: string;
    identifier: string;
    repositoryPath: string;
    repositoryType: "MAVEN" | "NPM" | "COCOA_POD" | "GENERIC_PROXY" | "DISTRIBUTION_ARCHIVE";
    temporaryRepo: boolean;
}
export interface TargetRepositoryPage {
    content?: TargetRepository[];
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalHits?: number; // int32
    totalPages?: number; // int32
}
export interface User {
    id: string;
    username?: string;
}
export interface ValidationResponse {
    errorType?: "FORMAT" | "DUPLICATION";
    hints?: string[];
    isValid: boolean;
}
export interface VersionValidationRequest {
    productVersionId: string;
    version: string;
}
export interface VertexBuild {
    data?: Build;
    dataType?: string;
    name?: string;
}
export type RequestBody = string;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Key = string;
export type Value = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    key: Parameters.Key;
    value: Parameters.Value;
}
export interface $201 {
}
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildConfigurationRef;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildConfigurationRef;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = DeliverableAnalyzerReportLabelRequest;
export interface $201 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = DeliverablesAnalysisRequest;
export interface $202 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = GroupBuildPushRequest;
export interface $202 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $202 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $202 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $202 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $202 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export interface $200 {
    lastModified?: string; // date-time
    date?: string; // date-time
    length?: number; // int32
    location?: string; // uri
    language?: {
        displayName?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: string[];
        unicodeLocaleAttributes?: string[];
        unicodeLocaleKeys?: string[];
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        language?: string;
    };
    cookies?: {
        [name: string]: {
            name?: string;
            value?: string;
            version?: number; // int32
            path?: string;
            domain?: string;
            comment?: string;
            maxAge?: number; // int32
            expiry?: string; // date-time
            secure?: boolean;
            httpOnly?: boolean;
        };
    };
    status?: number; // int32
    metadata?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
    entity?: {
        [key: string]: any;
    };
    mediaType?: {
        type?: string;
        subtype?: string;
        parameters?: {
            [name: string]: string;
        };
        wildcardType?: boolean;
        wildcardSubtype?: boolean;
    };
    allowedMethods?: string[];
    entityTag?: {
        value?: string;
        weak?: boolean;
    };
    stringHeaders?: {
        [name: string]: string[];
        empty?: boolean;
    };
    links?: {
        type?: string;
        uri?: string; // uri
        params?: {
            [name: string]: string;
        };
        title?: string;
        uriBuilder?: {
            [key: string]: any;
        };
        rel?: string;
        rels?: string[];
    }[];
    statusInfo?: {
        family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
        reasonPhrase?: string;
        statusCode?: number; // int32
    };
    headers?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $201 = BuildConfiguration;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $202 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = string[];
export interface $200 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildPushResult;
export type $201 = BuildPushResult;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = Artifact;
export type $201 = Artifact;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Quality = string;
export type Reason = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    quality: Parameters.Quality;
    reason: Parameters.Reason;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = BuildConfiguration;
export type $201 = BuildConfiguration;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = Environment;
export type $201 = Environment;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = GroupConfiguration;
export type $201 = GroupConfiguration;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = Product;
export type $201 = Product;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = ProductMilestone;
export type $201 = ProductMilestone;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = ProductRelease;
export type $201 = ProductRelease;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = ProductVersion;
export type $201 = ProductVersion;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = Project;
export type $201 = Project;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = CreateAndSyncSCMRequest;
export type $201 = RepositoryCreationResponse;
export type $202 = RepositoryCreationResponse;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = TargetRepository;
export type $201 = TargetRepository;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Quality = string;
export type Reason = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    quality: Parameters.Quality;
    reason: Parameters.Reason;
}
export type $201 = ArtifactRevision;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildConfiguration;
export type $201 = BuildConfigurationRevision;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = BuildConfigWithSCMRequest;
export type $201 = BuildConfigCreationResponse;
export type $202 = BuildConfigCreationResponse;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Callback = string;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    callback?: Parameters.Callback;
}
export interface $202 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export type Callback = string;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    callback?: Parameters.Callback;
}
export interface $202 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = EnvironmentDeprecationRequest;
export type $200 = Environment;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export type Result = "SUCCESSFUL" | "FAILED" | "REJECTED" | "CANCELLED" | "TIMEOUT" | "SYSTEM_ERROR";
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    result: Parameters.Result;
}
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = string;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Md5 = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sha1 = string;
export type Sha256 = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    sha256?: Parameters.Sha256;
    md5?: Parameters.Md5;
    sha1?: Parameters.Sha1;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = TargetRepositoryPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Attribute = string[];
export type BuildConfigName = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
    attribute?: Parameters.Attribute;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = DeliverableAnalyzerReportPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildEnvironmentPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = GroupBuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = GroupConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProjectPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type SearchUrl = string;
export type Sort = string;
export type Url = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    url?: Parameters.Url;
    "search-url"?: Parameters.SearchUrl;
}
export type $200 = SCMRepositoryPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Timestamp = number; // int64
export interface QueryParameters {
    pageSize?: Parameters.PageSize /* int32 */;
    pageIndex?: Parameters.PageIndex /* int32 */;
    timestamp?: Parameters.Timestamp /* int64 */;
}
export type $200 = BuildRecordInsightsPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = DeliverableAnalyzerOperationPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = DeliverableAnalyzerOperationPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildCategories = ("STANDARD" | "SERVICE" | "AUTO")[];
export type Identifier = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Qualities = ("NEW" | "VERIFIED" | "TESTED" | "DEPRECATED" | "BLACKLISTED" | "DELETED" | "TEMPORARY" | "IMPORTED")[];
export type RepoType = "MAVEN" | "NPM" | "COCOA_POD" | "GENERIC_PROXY" | "DISTRIBUTION_ARCHIVE";
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    identifier?: Parameters.Identifier;
    qualities?: Parameters.Qualities;
    repoType?: Parameters.RepoType;
    buildCategories?: Parameters.BuildCategories;
}
export type $200 = ArtifactInfoPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
}
export type $200 = GroupBuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export type Timestamp = number; // int64
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    timestamp?: Parameters.Timestamp /* int64 */;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigWithLatestPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = AnalyzedArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = Banner;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductVersionArtifactQualityStatisticsPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = number; // int32
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id /* int32 */;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = BuildConfigurationRevision;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = string;
export interface $404 {
}
export type $500 = ErrorResponse;
export type BuildType = string;
export interface PathParameters {
    buildType: Parameters.BuildType;
}
export type $200 = AlignmentParameters;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type BuildConfigName = string;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
    buildConfigName?: Parameters.BuildConfigName;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Latest = boolean;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Running = boolean;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
}
export type $200 = ProductMilestoneCloseResultPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = RunningBuildCount;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = User;
export type $500 = ErrorResponse;
export type $200 = ComponentVersion;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = BuildsGraph;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = BuildsGraph;
export interface $404 {
}
export type $500 = ErrorResponse;
export interface $200 {
    lastModified?: string; // date-time
    date?: string; // date-time
    length?: number; // int32
    location?: string; // uri
    language?: {
        displayName?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: string[];
        unicodeLocaleAttributes?: string[];
        unicodeLocaleKeys?: string[];
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        language?: string;
    };
    cookies?: {
        [name: string]: {
            name?: string;
            value?: string;
            version?: number; // int32
            path?: string;
            domain?: string;
            comment?: string;
            maxAge?: number; // int32
            expiry?: string; // date-time
            secure?: boolean;
            httpOnly?: boolean;
        };
    };
    status?: number; // int32
    metadata?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
    entity?: {
        [key: string]: any;
    };
    mediaType?: {
        type?: string;
        subtype?: string;
        parameters?: {
            [name: string]: string;
        };
        wildcardType?: boolean;
        wildcardSubtype?: boolean;
    };
    allowedMethods?: string[];
    entityTag?: {
        value?: string;
        weak?: boolean;
    };
    stringHeaders?: {
        [name: string]: string[];
        empty?: boolean;
    };
    links?: {
        type?: string;
        uri?: string; // uri
        params?: {
            [name: string]: string;
        };
        title?: string;
        uriBuilder?: {
            [key: string]: any;
        };
        rel?: string;
        rels?: string[];
    }[];
    statusInfo?: {
        family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
        reasonPhrase?: string;
        statusCode?: number; // int32
    };
    headers?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
}
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = GroupConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = GroupConfigPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface $302 {
}
export interface $404 {
}
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = DeliverableAnalyzerLabelEntryPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductMilestonePage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = MilestoneInfoPage;
export interface $404 {
}
export type $500 = ErrorResponse;
export type $200 = Banner;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = PncStatus;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductVersionPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = BuildPushResult;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductReleasePage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = ProductVersionRepositoryTypeStatisticsPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Rev = number; // int32
export interface PathParameters {
    id: Parameters.Id;
    rev: Parameters.Rev /* int32 */;
}
export type $200 = ArtifactRevision;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export type Rev = number; // int32
export interface PathParameters {
    id: Parameters.Id;
    rev: Parameters.Rev /* int32 */;
}
export type $200 = BuildConfigurationRevision;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
}
export type $200 = ArtifactRevisionPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type PageIndex = number; // int32
export type PageSize = number; // int32
export type Q = string;
export type Sort = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex /* int32 */;
    pageSize?: Parameters.PageSize /* int32 */;
    sort?: Parameters.Sort;
    q?: Parameters.Q;
}
export type $200 = BuildConfigRevisionPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export interface $200 {
    lastModified?: string; // date-time
    date?: string; // date-time
    length?: number; // int32
    location?: string; // uri
    language?: {
        displayName?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: string[];
        unicodeLocaleAttributes?: string[];
        unicodeLocaleKeys?: string[];
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        language?: string;
    };
    cookies?: {
        [name: string]: {
            name?: string;
            value?: string;
            version?: number; // int32
            path?: string;
            domain?: string;
            comment?: string;
            maxAge?: number; // int32
            expiry?: string; // date-time
            secure?: boolean;
            httpOnly?: boolean;
        };
    };
    status?: number; // int32
    metadata?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
    entity?: {
        [key: string]: any;
    };
    mediaType?: {
        type?: string;
        subtype?: string;
        parameters?: {
            [name: string]: string;
        };
        wildcardType?: boolean;
        wildcardSubtype?: boolean;
    };
    allowedMethods?: string[];
    entityTag?: {
        value?: string;
        weak?: boolean;
    };
    stringHeaders?: {
        [name: string]: string[];
        empty?: boolean;
    };
    links?: {
        type?: string;
        uri?: string; // uri
        params?: {
            [name: string]: string;
        };
        title?: string;
        uriBuilder?: {
            [key: string]: any;
        };
        rel?: string;
        rels?: string[];
    }[];
    statusInfo?: {
        family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
        reasonPhrase?: string;
        statusCode?: number; // int32
    };
    headers?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export interface $200 {
    lastModified?: string; // date-time
    date?: string; // date-time
    length?: number; // int32
    location?: string; // uri
    language?: {
        displayName?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: string[];
        unicodeLocaleAttributes?: string[];
        unicodeLocaleKeys?: string[];
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        language?: string;
    };
    cookies?: {
        [name: string]: {
            name?: string;
            value?: string;
            version?: number; // int32
            path?: string;
            domain?: string;
            comment?: string;
            maxAge?: number; // int32
            expiry?: string; // date-time
            secure?: boolean;
            httpOnly?: boolean;
        };
    };
    status?: number; // int32
    metadata?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
    entity?: {
        [key: string]: any;
    };
    mediaType?: {
        type?: string;
        subtype?: string;
        parameters?: {
            [name: string]: string;
        };
        wildcardType?: boolean;
        wildcardSubtype?: boolean;
    };
    allowedMethods?: string[];
    entityTag?: {
        value?: string;
        weak?: boolean;
    };
    stringHeaders?: {
        [name: string]: string[];
        empty?: boolean;
    };
    links?: {
        type?: string;
        uri?: string; // uri
        params?: {
            [name: string]: string;
        };
        title?: string;
        uriBuilder?: {
            [key: string]: any;
        };
        rel?: string;
        rels?: string[];
    }[];
    statusInfo?: {
        family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
        reasonPhrase?: string;
        statusCode?: number; // int32
    };
    headers?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export interface $200 {
    lastModified?: string; // date-time
    date?: string; // date-time
    length?: number; // int32
    location?: string; // uri
    language?: {
        displayName?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: string[];
        unicodeLocaleAttributes?: string[];
        unicodeLocaleKeys?: string[];
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        language?: string;
    };
    cookies?: {
        [name: string]: {
            name?: string;
            value?: string;
            version?: number; // int32
            path?: string;
            domain?: string;
            comment?: string;
            maxAge?: number; // int32
            expiry?: string; // date-time
            secure?: boolean;
            httpOnly?: boolean;
        };
    };
    status?: number; // int32
    metadata?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
    entity?: {
        [key: string]: any;
    };
    mediaType?: {
        type?: string;
        subtype?: string;
        parameters?: {
            [name: string]: string;
        };
        wildcardType?: boolean;
        wildcardSubtype?: boolean;
    };
    allowedMethods?: string[];
    entityTag?: {
        value?: string;
        weak?: boolean;
    };
    stringHeaders?: {
        [name: string]: string[];
        empty?: boolean;
    };
    links?: {
        type?: string;
        uri?: string; // uri
        params?: {
            [name: string]: string;
        };
        title?: string;
        uriBuilder?: {
            [key: string]: any;
        };
        rel?: string;
        rels?: string[];
    }[];
    statusInfo?: {
        family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";
        reasonPhrase?: string;
        statusCode?: number; // int32
    };
    headers?: {
        [name: string]: {
            [key: string]: any;
        }[];
        empty?: boolean;
    };
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = Artifact;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = BuildConfiguration;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = ProductVersion;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = Project;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = SCMRepository;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = TargetRepository;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = Build;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = DeliverableAnalyzerReport;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = Environment;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = GroupBuild;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = GroupConfiguration;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = Product;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = ProductMilestone;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = ProductRelease;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = DeliverableAnalyzerOperation;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Purl = string;
export interface PathParameters {
    purl: Parameters.Purl;
}
export type $200 = Artifact;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = SSHCredentials;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = ProductMilestoneStatistics;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type $200 = ProductVersionStatistics;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = ("UNRELEASED" | "EARLYACCESS" | "SUPPORTED" | "EXTENDED_SUPPORT" | "EOL")[];
export type $500 = ErrorResponse;
export type $200 = Parameter[];
export type $200 = boolean;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type $200 = boolean;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildConfiguration;
export type $200 = BuildConfiguration;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = GroupConfiguration;
export type $200 = GroupConfiguration;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Product;
export type $200 = Product;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductMilestone;
export type $200 = ProductMilestone;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductRelease;
export type $200 = ProductRelease;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductVersion;
export type $200 = ProductVersion;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Project;
export type $200 = Project;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = SCMRepository;
export type $200 = SCMRepository;
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildPushParameters;
export type $202 = BuildPushResult;
export type $400 = ErrorResponse;
export type $403 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Key = string;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    key: Parameters.Key;
}
export interface $204 {
}
export type $400 = ErrorResponse;
export interface $404 {
}
export type $500 = ErrorResponse;
export type ConfigId = string;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
    configId: Parameters.ConfigId;
}
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type DepId = string;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
    depId: Parameters.DepId;
}
export interface $204 {
}
export interface $404 {
}
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = DeliverableAnalyzerReportLabelRequest;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export type Rev = number; // int32
export interface PathParameters {
    id: Parameters.Id;
    rev: Parameters.Rev /* int32 */;
}
export type $200 = BuildConfiguration;
export interface $404 {
}
export type $500 = ErrorResponse;
export type RequestBody = string;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = string[];
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = string[];
export type $200 = ArtifactPage;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = string;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = PncStatus;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = ScratchDeliverablesAnalysisRequest;
export type $202 = DeliverableAnalyzerOperation;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
export type AlignmentPreference = "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
export type BuildDependencies = boolean;
export type Id = string;
export type KeepPodOnFailure = boolean;
export type RebuildMode = "IMPLICIT_DEPENDENCY_CHECK" | "EXPLICIT_DEPENDENCY_CHECK" | "FORCE";
export type TemporaryBuild = boolean;
export type TimestampAlignment = boolean;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    temporaryBuild?: Parameters.TemporaryBuild;
    rebuildMode?: Parameters.RebuildMode;
    buildDependencies?: Parameters.BuildDependencies;
    keepPodOnFailure?: Parameters.KeepPodOnFailure;
    timestampAlignment?: Parameters.TimestampAlignment;
    alignmentPreference?: Parameters.AlignmentPreference;
}
export type $202 = Build;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type AlignmentPreference = "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
export type Id = string;
export type RebuildMode = "IMPLICIT_DEPENDENCY_CHECK" | "EXPLICIT_DEPENDENCY_CHECK" | "FORCE";
export type TemporaryBuild = boolean;
export type TimestampAlignment = boolean;
export interface PathParameters {
    id: Parameters.Id;
}
export interface QueryParameters {
    temporaryBuild?: Parameters.TemporaryBuild;
    rebuildMode?: Parameters.RebuildMode;
    timestampAlignment?: Parameters.TimestampAlignment;
    alignmentPreference?: Parameters.AlignmentPreference;
}
export type RequestBody = GroupBuildRequest;
export type $202 = GroupBuild;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type AlignmentPreference = "PREFER_PERSISTENT" | "PREFER_TEMPORARY";
export type BuildDependencies = boolean;
export type Id = string;
export type KeepPodOnFailure = boolean;
export type RebuildMode = "IMPLICIT_DEPENDENCY_CHECK" | "EXPLICIT_DEPENDENCY_CHECK" | "FORCE";
export type Rev = number; // int32
export type TemporaryBuild = boolean;
export type TimestampAlignment = boolean;
export interface PathParameters {
    id: Parameters.Id;
    rev: Parameters.Rev /* int32 */;
}
export interface QueryParameters {
    temporaryBuild?: Parameters.TemporaryBuild;
    rebuildMode?: Parameters.RebuildMode;
    buildDependencies?: Parameters.BuildDependencies;
    keepPodOnFailure?: Parameters.KeepPodOnFailure;
    timestampAlignment?: Parameters.TimestampAlignment;
    alignmentPreference?: Parameters.AlignmentPreference;
}
export type $202 = Build;
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Artifact;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = BuildConfiguration;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Build;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = GroupConfiguration;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Product;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductMilestone;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductRelease;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = ProductVersion;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = Project;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = SCMRepository;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type Id = string;
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = DeliverableAnalyzerOperation;
export interface $204 {
}
export type $400 = ErrorResponse;
export type $409 = ErrorResponse;
export type $500 = ErrorResponse;
export type RequestBody = VersionValidationRequest;
export type $200 = ValidationResponse;
export type $400 = ErrorResponse;
export type $500 = ErrorResponse;
